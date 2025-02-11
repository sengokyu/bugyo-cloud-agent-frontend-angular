# 奉行クラウドタイムカードエージェント Web フロントエンド Angular

出勤と退勤に特化した、打刻専用モバイル向け UI です。

![](./.assets/screenshot-1.png)

#

## Running dev server

```bash
npm run start
```

## Testing

```bash
npm run test
```

## Deploying to azure blob storage

ファイルのコピー先を設定

```bash
npm config set dest='s3://BUCKET-NAME/base-path/'
```

```bash
npm run azcopy
```
