echo "[DEPLOY.SH] Pulling all new changes"
git pull
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Building new image"
export IMAGE_TAG=$(date +"%Y_%m_%d-%H_%M")-$(git rev-parse --short HEAD)
docker build -t bankless_mailchimp_api:$IMAGE_TAG .
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Deleting old container & running new one"
docker rm -f api_starter
docker run --detach --restart=always --env-file .env -p 8001:8001 --name bankless_mailchimp_api bankless_mailchimp_api:$IMAGE_TAG
echo "[DEPLOY.SH] DONE"

echo " "
echo "[DEPLOY.SH] DEPLOYMENT HAS BEEN SUCCESSFULLY DONE"
