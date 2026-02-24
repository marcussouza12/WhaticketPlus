FROM node:24-bullseye-slim

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_ENV=production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV CHROME_BIN=/usr/bin/chromium
ENV PYTHON=/usr/bin/python3

# ===== dependências do sistema =====
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    build-essential \
    pkg-config \
    git \
    curl \
    ca-certificates \
    dumb-init \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    chromium \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# copiar apenas dependências primeiro
COPY package*.json ./

# instalar dependências com npm install
RUN npm install --legacy-peer-deps --production=false && npm cache clean --force

# copiar código
COPY . .

RUN useradd -m whaticket
RUN chown -R whaticket:whaticket /app
USER whaticket

EXPOSE 3000

ENTRYPOINT ["dumb-init","--"]
CMD ["npm","run","start"]
