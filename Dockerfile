# Node Stable 18.16.0 경량화(alpine) 버전
FROM node:18.16.0-alpine

# 디렉토리 생성
RUN mkdir -p /app
# 디렉토리 지정
WORKDIR /app

# 의존성 설치
# package.json, yarn.lock 복사
COPY package*.json ./

# 패키지 설치
RUN npm install --production

# 필요한 모든 파일을 복사
COPY . .

# 프로젝트 빌드
RUN npm run build

# 컨테이너 포트 3000 설정
EXPOSE 5000

# 실행
CMD [ "npm", "start"]