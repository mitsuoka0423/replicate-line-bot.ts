import Replicate from "replicate";

interface Input {
	cond_aug: number;
	decoding_t: number;
	input_image: string;
	video_length: string;
	sizing_strategy: string;
	motion_bucket_id: number;
	frames_per_second: number;
}

interface Result {
	url: string;
}

const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
});

export const run = async (input: Input): Promise<Result> => {
	const output = await replicate.run(
		"stability-ai/stable-video-diffusion:3f0457e4619daac51203dedb472816fd4af51f3149fa7a9e0b5ffcf1b8172438",
		{
			input,
		},
	);

	return {
		url: output as unknown as string,
	};
};
