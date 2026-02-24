FROM node:18-bullseye-slim

ENV DEBIAN_FRONTEND=noninteractive

# ===== dependências de build (node-gyp) =====
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
    # ===== libs necessárias para canvas/sharp/whatsapp =====
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    # ===== chromium =====
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

# puppeteer não baixar chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV CHROME_BIN=/usr/bin/chromium
ENV NODE_ENV=production

WORKDIR /app

# importante: copiar apenas package primeiro
COPY package*.json ./

# resolver node-gyp
RUN npm config set python /usr/bin/python3

# instalar dependências
RUN npm install --legacy-peer-deps

# copiar código
COPY . .

# criar usuário
RUN useradd -m whaticket
RUN chown -R whaticket:whaticket /app
USER whaticket

EXPOSE 3000

ENTRYPOINT ["dumb-init","--"]
CMD ["npm","run","start"]
