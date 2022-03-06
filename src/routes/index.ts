import Router from "../utilities/router";

const router = new Router();

router.get("/*", async (request) => {
	return new Response("Hello World!", {
		status: 200,
		statusText: "Ok.",
	});
})

export default router;