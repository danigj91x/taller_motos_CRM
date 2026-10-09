FROM node:22-bookworm-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates fd-find ripgrep \
 && ln -s /usr/bin/fdfind /usr/local/bin/fd \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g @earendil-works/pi-coding-agent
RUN mkdir -p /home/node/.pi && chown node:node /home/node/.pi

USER node
WORKDIR /workspace
ENTRYPOINT ["pi"]