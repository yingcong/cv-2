---
title: "Our CVPR paper \"Kiss3DGen: Repurposing Image Diffusion Models for 3D Asset Generation\" is getting noticed"
summary: "Jiantao Lin, Xin Yang, Meixi Chen, Yingjie Xu, Dongyu Yan, Leyi Wu, Xinli Xu, Lie Xu, Shunsi Zhang, Ying-Cong Chen"
date: 2025-03-13
authors:
  - admin
---
![](featured.png)


We are excited to introduce Kiss3DGen (Keep It Simple and Straightforward in 3D Generation), our innovative framework that efficiently repurposes well-trained 2D image diffusion models for 3D content generation. This work represents a significant breakthrough in 3D asset generation, making it more accessible and efficient than ever before.

Traditional 3D content generation methods often require extensive 3D asset datasets for training, which are notoriously difficult to collect and process. Our approach transforms this challenging 3D generation problem into a more manageable 2D image generation task, leveraging the power of existing pretrained diffusion models.

Key Innovations:

**3D Bundle Image Generation**: We introduce a novel approach that fine-tunes diffusion models to generate "3D Bundle Images" - a tiled representation that combines multi-view images with their corresponding normal maps. This unique representation bridges the gap between 2D and 3D generation.

**Efficient 3D Reconstruction**: Our method utilizes the generated normal maps for 3D mesh reconstruction, while the multi-view images provide accurate texture mapping. This results in complete, high-quality 3D models without requiring direct 3D training data.

**Versatile Applications**: Kiss3DGen is compatible with various diffusion model techniques, enabling advanced features such as 3D editing, mesh refinement, and texture enhancement. This compatibility ensures that our framework can benefit from future advances in diffusion model technology.

Our approach has demonstrated exceptional results in generating diverse and high-quality 3D assets, making it a valuable tool for various applications in gaming, design, and virtual reality. The simplicity and effectiveness of Kiss3DGen make it particularly appealing for real-world applications.

We are proud to announce that this project has been successfully commercialized in collaboration with Quwan Network Technology, and is now available for real-world applications through their platform "趣丸万相".


For more information, please visit our [project page](https://ltt-o.github.io/Kiss3dgen.github.io/).

---

**Authors:**
- Jiantao Lin, My student from HKUST(GZ)
- Xin Yang, My student from HKUST(GZ)
- Meixi Chen, My student from HKUST(GZ)
- Yingjie Xu, My student from HKUST(GZ)
- Dongyu Yan, My student from HKUST(GZ)
- Leyi Wu, My student from HKUST(GZ)
- Xinli Xu, My student from HKUST(GZ)
- Lie Xu, Guangzhou Quwan Network Technology
- Shunsi Zhang, Guangzhou Quwan Network Technology
- Ying-Cong Chen, HKUST(GZ)

Special thanks to Hanfen Zhao and Guoliang Pang for their engineering support.

--- 