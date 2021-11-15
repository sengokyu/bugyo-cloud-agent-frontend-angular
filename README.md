# Webフロントエンド Angular

## Running dev server

```bash
npm run start
```


## Testing

```bash
npm run test
```

## Deploying to azure blob storage

AzureサブスクリプションIDを設定

```bash
npm config set azure.subscription 'AzureサブスクリプションID'
```

ファイルのコピー先を設定

```bash
npm config set azcopy.dest 'http://your.blob.windows.net/$web'
```


```bash
npm run azcopy
```
