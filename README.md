<h1 align="center" style="font-weight: bold">
    cloudflare-worker-template
</h1>

<h3 align="center" style="font-weight: bold">
    A template for Cloudflare Worker written in Typescript
</h3>

---

## **Importend**

I use pnpm for the install when you use npm or yarn you have to change it.

For more depth how to use Cloudflare Worker in Typescript go to the following repo [worker-typescript-template](https://github.com/cloudflare/worker-typescript-template)

## **Examples**

Here some repos where this template is used

[kv-store-api](https://github.com/HaxSam/kv-storage-api)

## **Usage**

Use the command

```
wrangler generate my-ts-project https://github.com/HaxSam/cloudflare-worker-template/
```

Change the following files with your information

- wrangler.toml
```toml
name = "cloudflare-worker-template"
...
command = "pnpm install && pnpm build"
```

- package.json
```json
{
	"name": "cloudflare-worker-template",
	"version": "1.0.0",
	"description": "A template for creating a Cloudflare Worker with Typescript and a simple Routing class",
	"author": "HaxSam",
}
```

## **License**

### <a target="_blank" href="https://choosealicense.com/licenses/mit/">MIT</a>

Copyright for portions of project [cloudflare-worker-template](https://github.com/HaxSam/cloudflare-worker-template/) are held by [Github Account [HaxSam](https://github.com/HaxSam) Owner, 2022] as part of project [worker-typescript-template](https://github.com/cloudflare/worker-typescript-template)

All other copyright for project [cloudflare-worker-template](https://github.com/HaxSam/cloudflare-worker-template/) are held by [Github Account [HaxSam](https://github.com/HaxSam) Owner, 2022].

Check the [LICENSE](LICENSE) for more details.
