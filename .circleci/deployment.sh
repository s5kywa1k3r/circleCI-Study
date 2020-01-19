#ssh ubuntu@ec2-13-209-41-76.ap-northeast-2.compute.amazonaws.com -i .KJ_main.pem -o StrictHostKeyChecking=no <<'ENDSSH'
echo $(pwd)
~/setup_backend.sh
#exit
#ENDSSH
