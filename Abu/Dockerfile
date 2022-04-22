FROM fusuf/whatsasena:latest

RUN git clone https://github.com/A4edits/sushilanv3 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/A4edits/bgms

CMD ["node", "bot.js"]
