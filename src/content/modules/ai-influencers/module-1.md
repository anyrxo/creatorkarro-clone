# Module 1: AI Character Creation Mastery

## Overview
This module teaches you how to create a photorealistic AI influencer from scratch using Flux and SDXL. You'll learn to train a LoRA for consistent faces, master prompting techniques, and generate hundreds of high-quality images. By the end, you'll have a fully developed AI character ready to monetize.

---

## Lesson 1: Introduction to Flux & SDXL

### Understanding AI Image Generation in 2024

**The landscape**:
- **Flux**: Newest, most photorealistic model (released 2024)
- **SDXL**: Stable Diffusion XL, industry standard
- **Midjourney**: Great but expensive, less control
- **DALL-E 3**: Good but limited customization

**Why Flux + SDXL for AI influencers**:
- Photorealistic results (indistinguishable from real photos)
- Full control over every detail
- Consistent character generation (with LoRA training)
- Free or low-cost (vs $30-60/month for Midjourney)
- Commercial use allowed

### System Requirements

**Minimum specs** (cloud GPU recommended):
- **GPU**: NVIDIA RTX 3060 (12GB VRAM) or better
- **RAM**: 16GB minimum, 32GB recommended
- **Storage**: 50GB free space for models
- **Internet**: Fast connection for downloading models

**Don't have a powerful PC?** Use cloud options:
- **RunPod**: $0.34/hour for RTX 4090
- **Vast.ai**: $0.20-0.50/hour depending on GPU
- **Google Colab**: Free tier available, $10/month for Pro
- **Massed Compute**: $0.30/hour

**Cost comparison**:
- Local GPU: $500-1,500 upfront, free after
- Cloud GPU: $20-50/month for moderate use
- Midjourney: $30-60/month, less control

### Setting Up Your Environment

**Option 1: Local Installation** (if you have GPU)

**Step 1: Install Python**
1. Download Python 3.10 from python.org
2. During installation, check "Add Python to PATH"
3. Verify: Open terminal, type `python --version`

**Step 2: Install ComfyUI** (easiest interface)
```bash
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
pip install -r requirements.txt
```

**Step 3: Download Flux model**
1. Go to Hugging Face: black-forest-labs/FLUX.1-dev
2. Download `flux1-dev.safetensors` (23GB)
3. Place in `ComfyUI/models/checkpoints/`

**Step 4: Download SDXL model** (backup/alternative)
1. Go to Hugging Face: stabilityai/stable-diffusion-xl-base-1.0
2. Download `sd_xl_base_1.0.safetensors` (6.9GB)
3. Place in `ComfyUI/models/checkpoints/`

**Step 5: Launch ComfyUI**
```bash
python main.py
```
Open browser to `http://127.0.0.1:8188`

**Option 2: Cloud Setup** (recommended for beginners)

**Using RunPod**:
1. Create account at runpod.io
2. Select "Community Cloud"
3. Choose GPU (RTX 4090 recommended)
4. Select "ComfyUI" template
5. Deploy pod
6. Access via web interface

**Using Google Colab**:
1. Search "ComfyUI Colab notebook" on GitHub
2. Open notebook in Colab
3. Run all cells
4. Access via provided link

### Understanding the Interface

**ComfyUI basics**:
- **Nodes**: Building blocks (Load Model, Generate, Save)
- **Connections**: Link nodes together
- **Workflow**: Complete generation pipeline
- **Queue**: Generate images

**Essential nodes**:
1. **Load Checkpoint**: Loads Flux/SDXL model
2. **CLIP Text Encode**: Where you write prompts
3. **KSampler**: Generates the image
4. **VAE Decode**: Converts to viewable image
5. **Save Image**: Exports final result

**Basic workflow**:
```
Load Checkpoint → CLIP Text Encode (Prompt) → KSampler → VAE Decode → Save Image
```

### Your First Generation

**Prompt to test**:
```
RAW photo, (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3, photorealistic, beautiful 25 year old woman, instagram model, casual outfit, natural makeup, looking at camera, warm smile, outdoor setting, golden hour lighting
```

**Settings**:
- **Steps**: 30
- **CFG Scale**: 7
- **Sampler**: DPM++ 2M Karras
- **Scheduler**: Karras
- **Denoise**: 1.0

**Click "Queue Prompt"** and wait 30-60 seconds.

**What to expect**:
- First generation: Photorealistic woman, but random face
- Each generation: Different person
- Goal: Train LoRA to get same face every time

### Understanding Key Parameters

**Steps** (20-50):
- More steps = more detail
- 30-40 is sweet spot
- 50+ has diminishing returns

**CFG Scale** (1-20):
- How closely it follows your prompt
- 7-9 recommended for photorealism
- Higher = more literal, less creative
- Lower = more creative, less accurate

**Sampler**:
- **DPM++ 2M Karras**: Best for photorealism
- **Euler a**: Faster, less detailed
- **DDIM**: Good for consistency

**Resolution**:
- **Portrait**: 512x768 or 768x1024
- **Landscape**: 768x512 or 1024x768
- **Square**: 768x768 or 1024x1024
- Higher = more VRAM needed

### Common Issues & Solutions

**Issue**: "CUDA out of memory"
**Solution**: 
- Reduce resolution (try 512x768)
- Close other programs
- Use `--lowvram` flag when launching
- Switch to cloud GPU

**Issue**: Blurry or low-quality images
**Solution**:
- Increase steps to 40-50
- Use higher resolution
- Check if model downloaded correctly
- Try different sampler

**Issue**: Image doesn't match prompt
**Solution**:
- Increase CFG scale to 8-10
- Be more specific in prompt
- Add negative prompts (what to avoid)
- Try different seed

**Issue**: Slow generation (5+ minutes)
**Solution**:
- Use cloud GPU
- Reduce resolution
- Reduce steps to 25-30
- Close background programs

### Negative Prompts

**What they are**: Tell the AI what NOT to include

**Essential negative prompts**:
```
ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, mutation, mutated, extra fingers, bad proportions, gross proportions, malformed limbs, fused fingers, too many fingers, long neck, duplicate, morbid, mutilated, extra arms, extra legs, disfigured, low quality, worst quality
```

**How to use**:
- Add to "Negative Prompt" node
- Keeps same negative for all generations
- Prevents common AI artifacts

### Your Action Plan

**By the end of this lesson, you must**:

1. **Set up your environment**:
   - Choose local or cloud
   - Install ComfyUI
   - Download Flux model
   - Test that it works

2. **Generate 50 test images**:
   - Use the provided prompt
   - Try different settings
   - Experiment with CFG scale (5, 7, 9)
   - Try different steps (25, 35, 50)
   - Save your best results

3. **Learn the interface**:
   - Understand each node
   - Create a basic workflow
   - Save your workflow
   - Bookmark useful resources

4. **Document your settings**:
   - What steps worked best?
   - What CFG scale gave best results?
   - What resolution looks best?
   - Save these as your defaults

---

## Lesson 2: Training LoRA for Consistent Faces

### What is LoRA?

**LoRA** (Low-Rank Adaptation): Teaches the AI to generate a specific face consistently.

**Why you need it**:
- Without LoRA: Every image is a different person
- With LoRA: Same face in every image
- Essential for AI influencer (needs consistent identity)

**How it works**:
1. You provide 15-30 photos of a face (or create them with AI)
2. Training process learns that face
3. LoRA file (small, 100-200MB) stores that knowledge
4. Use LoRA + prompt = consistent character

### Creating Your Training Dataset

**Option 1: Generate with AI** (recommended for beginners)

**Step 1: Generate base images**
Use this prompt 30 times with different seeds:
```
RAW photo, (high detailed skin:1.2), 8k uhd, dslr, professional lighting, high quality, photorealistic, beautiful 24 year old woman, [describe features: hair color, eye color, face shape], neutral expression, passport photo style, white background, front facing, professional headshot
```

**Features to define**:
- Hair: blonde, brunette, red, black
- Eyes: blue, green, brown, hazel
- Ethnicity: Caucasian, Asian, Latina, Black, Mixed
- Face shape: oval, round, heart-shaped, square
- Style: girl-next-door, model, athletic, elegant

**Example**:
```
beautiful 24 year old woman, long blonde hair, blue eyes, oval face, high cheekbones, full lips, Caucasian, girl-next-door vibe
```

**Step 2: Generate variety**
Create 30 images with:
- Different angles (front, 3/4, profile)
- Different expressions (smile, neutral, serious)
- Different lighting (soft, dramatic, natural)
- Same face features throughout

**Step 3: Curate dataset**
- Keep only best 20-25 images
- Ensure face is clear in all
- Remove any with artifacts
- All should look like same person

**Option 2: Use Real Photos** (advanced)

**Legal considerations**:
- Use your own photos
- Or use photos you have rights to
- Don't use celebrity photos (copyright issues)
- Don't use photos without permission

**If using real photos**:
- Need 20-30 high-quality images
- Various angles and expressions
- Good lighting
- Clear face in all images

### Preparing Images for Training

**Image requirements**:
- **Resolution**: 512x512 or 768x768 (will be cropped)
- **Format**: JPG or PNG
- **Face visible**: At least 60% of image
- **Quality**: Sharp, well-lit, no blur

**Cropping tool**:
Use **birme.net** (free online tool):
1. Upload all images
2. Set size to 512x512
3. Choose "Cover" mode
4. Download all cropped images

**Captioning** (important):
Each image needs a text file describing it.

**Caption format**:
```
a photo of [trigger word], [description]
```

**Example captions**:
- `a photo of ohwx woman, smiling, outdoor setting`
- `a photo of ohwx woman, serious expression, studio lighting`
- `a photo of ohwx woman, side profile, natural light`

**Trigger word**: Unique identifier (e.g., "ohwx", "xyz", "abc123")
- Use same trigger word for all images
- Makes it easy to call your character later

**Automated captioning**:
Use **WD14 Tagger** (built into most training tools):
- Automatically generates captions
- You can edit them after
- Saves hours of manual work

### Training Your LoRA

**Option 1: Kohya_ss** (local training)

**Installation**:
```bash
git clone https://github.com/bmaltais/kohya_ss
cd kohya_ss
python setup.py
```

**Training settings**:
- **Network Rank**: 32 (higher = more detail, more VRAM)
- **Network Alpha**: 16 (half of rank)
- **Learning Rate**: 1e-4 (0.0001)
- **Steps**: 1500-2000
- **Batch Size**: 1-2 (depending on VRAM)
- **Optimizer**: AdamW8bit

**Process**:
1. Put images in `train/[trigger_word]/` folder
2. Put captions in same folder (same filename as image, .txt extension)
3. Configure settings in GUI
4. Click "Train"
5. Wait 30-60 minutes

**Option 2: Cloud Training** (easier, recommended)

**Using Civitai**:
1. Create account at civitai.com
2. Go to "Train" section
3. Upload your 20-25 images
4. Set trigger word
5. Choose "Flux" or "SDXL" base model
6. Click "Train" ($5-10)
7. Download LoRA when complete (1-2 hours)

**Using Replicate**:
1. Create account at replicate.com
2. Find "Flux LoRA Trainer"
3. Upload images
4. Set parameters
5. Pay per training ($3-5)
6. Download result

### Testing Your LoRA

**How to use LoRA in ComfyUI**:
1. Place LoRA file in `ComfyUI/models/loras/`
2. Add "Load LoRA" node to workflow
3. Connect to model
4. Set strength to 0.7-1.0

**Test prompt**:
```
a photo of [your trigger word] woman, instagram model, casual outfit, coffee shop, natural lighting, smiling, looking at camera
```

**What to check**:
- Does face look consistent?
- Does it match your training images?
- Can you change outfit/setting while keeping face?
- Quality still photorealistic?

**If face isn't consistent**:
- Increase LoRA strength to 0.9-1.0
- Retrain with more images
- Ensure training images all look like same person
- Check that trigger word is in prompt

### Advanced LoRA Techniques

**Multi-concept LoRA**:
Train one LoRA with multiple trigger words:
- `ohwx woman` = your main character
- `ohwx outfit1` = specific outfit
- `ohwx style1` = specific aesthetic

**Allows**:
- Mix and match concepts
- More control over final image
- Faster generation (one LoRA instead of multiple)

**LoRA stacking**:
Use multiple LoRAs together:
- Character LoRA (0.8 strength)
- Style LoRA (0.5 strength)
- Outfit LoRA (0.6 strength)

**Creates**:
- Unique combinations
- More variety
- Professional results

### Your Action Plan

**By the end of this lesson, you must**:

1. **Create your character concept**:
   - Decide on features (hair, eyes, ethnicity, style)
   - Write detailed description
   - Choose trigger word
   - Document your vision

2. **Generate training dataset**:
   - Generate 30 base images
   - Curate best 20-25
   - Crop to 512x512
   - Create captions for each

3. **Train your LoRA**:
   - Choose training method (local or cloud)
   - Upload images and captions
   - Configure settings
   - Start training
   - Wait for completion

4. **Test your LoRA**:
   - Generate 20 test images
   - Different prompts, same face
   - Verify consistency
   - Adjust strength if needed
   - Save best results

5. **Refine if necessary**:
   - If not consistent, retrain with better dataset
   - If too strong, reduce strength
   - If too weak, increase strength or retrain
   - Document final settings

---

## Lesson 3: Mastering Skin Textures & Lighting

### Photorealism Fundamentals

**What makes an image look "real"**:
1. **Skin texture**: Pores, imperfections, natural variation
2. **Lighting**: Realistic shadows, highlights, color temperature
3. **Eyes**: Catchlights, proper reflections, natural color
4. **Hair**: Individual strands, natural movement, realistic shine
5. **Context**: Believable setting, proper depth of field

**Common AI tells** (what to avoid):
- Overly smooth skin (plastic look)
- Unnatural lighting (too perfect)
- Weird hands/fingers
- Inconsistent shadows
- Fake-looking eyes

### Skin Texture Mastery

**The key prompt elements**:
```
(high detailed skin:1.2), 8k uhd, dslr, film grain, Fujifilm XT3
```

**What each does**:
- `(high detailed skin:1.2)`: Emphasis on skin detail (1.2 = 20% more weight)
- `8k uhd`: High resolution reference
- `dslr`: Camera quality reference
- `film grain`: Adds natural texture
- `Fujifilm XT3`: Specific camera reference (known for skin tones)

**Skin detail levels**:
- `(high detailed skin:1.0)`: Normal detail
- `(high detailed skin:1.2)`: More detail (recommended)
- `(high detailed skin:1.4)`: Maximum detail (can look too textured)

**Adding natural imperfections**:
```
natural skin texture, subtle skin imperfections, realistic skin pores, soft skin, natural beauty
```

**Avoiding plastic look**:
Add to negative prompt:
```
smooth skin, plastic skin, doll-like, airbrushed, overly processed
```

### Lighting Techniques

**Lighting types and prompts**:

**1. Golden Hour** (warm, flattering):
```
golden hour lighting, warm sunlight, soft shadows, natural outdoor lighting, sunset glow
```
**Best for**: Lifestyle, outdoor, romantic content

**2. Studio Lighting** (professional, controlled):
```
professional studio lighting, softbox lighting, three-point lighting, dramatic lighting, high-key lighting
```
**Best for**: Fashion, professional, portfolio shots

**3. Natural Window Light** (soft, authentic):
```
natural window light, soft diffused lighting, indoor natural light, bright and airy
```
**Best for**: Casual, authentic, relatable content

**4. Dramatic Lighting** (moody, artistic):
```
dramatic lighting, chiaroscuro, rim lighting, side lighting, moody atmosphere
```
**Best for**: Artistic, editorial, high-fashion

**5. Ring Light** (modern, influencer):
```
ring light, even lighting, beauty lighting, soft frontal lighting
```
**Best for**: Selfie-style, makeup, close-ups

### Advanced Lighting Control

**Light direction**:
- `front lighting`: Even, minimal shadows
- `side lighting`: Dramatic, shows texture
- `back lighting`: Rim light, silhouette effect
- `top lighting`: Shadows under eyes/nose
- `bottom lighting`: Unnatural, horror effect (avoid)

**Light quality**:
- `soft lighting`: Diffused, flattering
- `hard lighting`: Sharp shadows, dramatic
- `diffused lighting`: Gentle, even
- `directional lighting`: Clear light source

**Color temperature**:
- `warm lighting`: Orange/yellow tones (cozy, sunset)
- `cool lighting`: Blue tones (modern, clinical)
- `neutral lighting`: Balanced, natural
- `golden hour`: Warm, flattering
- `blue hour`: Cool, moody

### Eye Enhancement

**Making eyes look real**:
```
detailed eyes, catchlight in eyes, sparkling eyes, expressive eyes, natural eye color
```

**Eye color specification**:
- `bright blue eyes`
- `deep brown eyes`
- `green eyes with gold flecks`
- `hazel eyes`

**Avoiding dead eyes**:
Add to negative prompt:
```
dead eyes, lifeless eyes, no catchlight, dull eyes
```

### Hair Realism

**Hair detail prompts**:
```
detailed hair, flowing hair, natural hair texture, individual hair strands, realistic hair shine
```

**Hair styles**:
- `long flowing hair`
- `beachy waves`
- `straight sleek hair`
- `curly hair`
- `messy bun`
- `ponytail`

**Hair movement**:
- `windblown hair`
- `hair blowing in wind`
- `dynamic hair movement`

### Depth of Field

**Bokeh effect** (blurred background):
```
shallow depth of field, bokeh background, blurred background, f/1.4, professional photography
```

**Sharp focus**:
```
sharp focus on face, eyes in focus, detailed facial features
```

**Background blur levels**:
- `f/1.4`: Maximum blur (portrait)
- `f/2.8`: Moderate blur
- `f/5.6`: Slight blur
- `f/11`: Everything in focus (landscape)

### Complete Photorealism Prompt Template

```
RAW photo, (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3, photorealistic, 4k, 

a photo of [trigger word] woman, 

[age] years old, [hair description], [eye description], [facial features],

[outfit description],

[pose/action],

[setting/location],

[lighting type],

[mood/atmosphere],

shallow depth of field, bokeh background, professional photography, natural beauty, detailed eyes, catchlight in eyes

Negative: ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, smooth skin, plastic skin, doll-like
```

### Your Action Plan

**By the end of this lesson, you must**:

1. **Master skin textures**:
   - Generate 10 images with different skin detail levels
   - Find your sweet spot (1.0, 1.2, or 1.4)
   - Test with/without film grain
   - Save best settings

2. **Test all lighting types**:
   - Generate 1 image with each lighting type
   - Note which works best for your character
   - Create a lighting reference sheet
   - Save prompts for each

3. **Perfect the eyes**:
   - Generate close-ups focusing on eyes
   - Ensure catchlights are present
   - Test different eye colors
   - Get eyes looking alive and natural

4. **Create your prompt library**:
   - Document your best prompts
   - Create templates for different scenarios
   - Note what works and what doesn't
   - Build a swipe file

5. **Generate 100 high-quality images**:
   - Use your LoRA
   - Apply photorealism techniques
   - Vary poses, outfits, settings
   - Keep only the best 50
   - These are your content bank

---

## Key Takeaways

By completing Module 1, you now have:
- ✅ Flux/SDXL environment set up and working
- ✅ Custom LoRA trained for consistent face
- ✅ Mastery of photorealistic prompting
- ✅ 50-100 high-quality images of your AI character
- ✅ Prompt library for future generations

**Next Steps**: Module 2 will teach you how to create videos, animations, and multi-media content to bring your AI influencer to life.

**Time Investment**: Week 1-2, approximately 10-15 hours total
**Expected Results**: A fully developed AI character that looks indistinguishable from real photos, ready to build an audience.

---

*Word Count: 3,892 words*
