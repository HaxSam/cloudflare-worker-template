<h1 align="center" style="font-weight: bold">
    cloudflare-worker-template
</h1>

<h3 align="center" style="font-weight: bold">
    A Template for Cloudflare Worker written in Typescript
</h3>

---

## **Importend**

I use pnpm for the install when you use npm or yarn you have to change it.

For more depth how to use Cloudfalre Worker in Typescript go to the following repo [worker-typescript-template](https://github.com/cloudflare/worker-typescript-template)

## **Usage**

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