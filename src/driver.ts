import { run } from "./api/stability-ai/stable-video-diffusion";

run({
	cond_aug: 0.02,
	decoding_t: 7,
	input_image: "https://i.ibb.co/3TNWY3r/line-item.jpg",
	video_length: "14_frames_with_svd",
	sizing_strategy: "maintain_aspect_ratio",
	motion_bucket_id: 127,
	frames_per_second: 6,
}).then((result) => console.log(result));
