// Normal and NSFW animation examples
const normalAnimationExamples = [
  {
    image: 'https://civitai.com/images/79663486',
    prompt: 'masterpiece, best quality, amazing quality, 4k, very aesthetic, high resolution, ultra-detailed, absurdres, newest, scenery, colorful, rim light, backlit, cosmic sky, aurora, chaos, fashion photography of busty cute girl, (cute:1.2), intense long pink hair, long hair, choppy bangs, nebulae cosmic purple eyes, rimlit eyes, dynamic pose, bokeh, purple serafuku with big red ribbon, red annular solar eclipse halo, perfect night, fantasy background, looking at viewer, light smile, glowing star in hand, (colorful light particles:1.2), (face focus:0.7), from below, dutch angle, upper body, head tilt, BREAK, detailed background, blurry foreground, depth of field, volumetric lighting'
  },
  {
    image: 'https://civitai.com/images/79663493',
    prompt: 'masterpiece, best quality, amazing quality, 4k, very aesthetic, high resolution, ultra-detailed, absurdres, newest, scenery, (dappled sunlight:1.2), rim light, backlit, dramatic shadow, 1girl, long blonde hair, blue eyes, shiny eyes, parted lips, medium breasts, puffy sleeve white dress, forest, flowers, white butterfly, looking at viewer, sideways glance, leaning side against tree, vines, green, arms, upper body, close-up, dutch angle, shiny skin, BREAK, dramatic shadow, depth of field, vignetting, volumetric lighting'
  },
  {
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/19b95c1c-a3a0-4e87-992d-e5f37e046e2c/anim=false,width=450/82448911.jpeg',
    prompt: 'masterpiece,best quality,amazing quality,newest,absurdres,highres, newest,very awa, scenery,anime, (dutch angle:1.4),from side, 1girl,solo, beautiful face, perfect eyes, detailed eyes,mature female,slim body, black hair,blunt bangs, straight hair, red eyes, sad, looking at another, looking down, large breasts,collarbone, serafuku, miniskirt, short sleeves, socks, (wet:0.8), holding umbrella, shoulder bag, squatting, pat cat, rain, wall, orange cat, dark, stormy,desaturated, ominous atmosphere, (blurry background:1.4),backlighting, blurry foreground, depth of field,dark background, dark,reflection, bokeh,shadow,'
  },
  {
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a76889a0-15c2-4dc3-88c7-a3107574518a/anim=false,width=450/00003_3832598605.jpeg',
    prompt: 'masterpiece, best quality, amazing quality, 4k, very aesthetic, high resolution, ultra-detailed, absurdres, newest, scenery, backlit, 1girl, solo, blonde hair, long hair, choppy bangs, blue eyes, uneven eyes, upturned eyes, parted lips, smile, medium breasts, turtleneck (lace-trimmed:1.2) frilled puffy sleeve white dress, shoulder cutout, see-through_silhouette, shiny eyes, hand on own forehead, head tilt, fisheye, upper body, portrait, dutch angle, from above, dynamic, beach, blue sky, island, floating hair, BREAK, hands, fingers, (dappled sunlight, sunburst, lens flare:1.2), vignetting, dramatic shadow, cinematic lighting, rim light, detailed background, depth of field, vignetting, volumetric lighting'
  },
];

const nsfwAnimationExamples = [
  {
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/df232dba-409a-41a2-b2cc-d9a19b627d38/anim=false,width=450/85469194.jpeg',
    prompt: 'masterpiece, best quality, amazing quality, high resolution, ultra-detailed, absurdres, newest, scenery, 1girl, Texas_(arknights), solo, sole_focus, sheer pantyhose, soles, office, office chair, from below, sitting, crossed legs, full body, BREAK, depth of field, volumetric lighting'
  },
  {
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/09c519a0-2668-40c7-b51d-50cba566980c/anim=false,width=450/85452106.jpeg',
    prompt: `1girl,solo,Hatsune Miku,aqua hair,medium hair,twintails,
masterpiece,best quality,amazing quality,4k,very aesthetic,high resolution,ultra-detailed,absurdres,newest,dappled sunlight,rim light,dramatic shadow,safe,
animal ears,cat ears,medium breasts,animal ear fluff,side boob,wink,
embarrass,open mouth,smile,navel,bare shoulders,detached sleeves,stomach,white panties,sweater,side-tie panties,string panties,
ribbed sweater,turtleneck sweater,white sweater,highleg panties,sleeveless turtleneck,sleeveless sweater,ribbed sleeves,
white garter straps,virgin destroyer sweater,thighhighs,scenery,looking_at_viewer,from_side,head_tilt,leaning_forward,upper_body,cat_pose,`
  },
  {
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/166c6aad-249e-4ba9-9f2e-623496550a58/anim=false,width=450/85459444.jpeg',
    prompt: `(masterpiece,best quality:1.3),(amazing quality:1.3),very aesthetic,high resolution,ultra-detailed,absurdres,newest,scenery,depth of field,volumetric lighting,shiny sikin,shiny hair,
forest,elf,long blonde hair,huge breasts,quiver,green_cloak,white midriff,breasts curtain,taut_clothes,underbust,navel_cutout,(black stockings),brown footwear,blush,smile of charm,large areola,(sweat:1.2),(steaming body:1.5),(covered nipples:1.2),belt_bag,kneel on one knee,spread legs,legs_up,arm up,leaning forward,`
  },
  {
    image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/65eb25cd-052a-426a-afc9-a658281ff98f/anim=false,width=450/85359326.jpeg',
    prompt: 'Makima (Chainsaw Man),seductive expression,piercing golden eyes with red accents,long red hair in braid,formal officewear,white dress shirt (tight),black necktie,black high-waisted pants,tucked-in shirt,slim waist,wide hips,large breasts,dynamic pose,confident body language,high heels,glossy skin,flawless face,legs crossed,soft smile,direct gaze,stylized anime,semi-realistic lighting,soft shading,ultra detailed,8k,masterpiece,best quality,elegant composition,cinematic lighting,alluring beauty,full body,symmetrical balance,dark background,dramatic contrast,1girl,solo,'
  }
];

const normalQuickPrompts = [
  'Magical girl flying over city',
  'Cyberpunk samurai at night',
  'Cute cat in a fantasy library',
  'Dragon rider in sunset sky'
];

const nsfwQuickPrompts = [
  // 'Seductive demon girl',
  // 'Passionate romantic scene',
  // 'Sultry vampire princess',
  // 'Intimate beach encounter'
];

// Sample anime images for demonstration
const sampleImages = [
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=600&fit=crop'
];

let cooldownTimer = null;
let cooldownEndTime = null;

// Cooldown functionality
function startCooldown(cooldownOverlay, cooldownText) {
  const cooldownDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
  cooldownEndTime = Date.now() + cooldownDuration;
  
  generateBtn.disabled = true;
  cooldownOverlay.classList.remove('hidden');
  
  cooldownTimer = setInterval(() => {
    const remainingTime = cooldownEndTime - Date.now();
    
    if (remainingTime <= 0) {
      clearInterval(cooldownTimer);
      generateBtn.disabled = false;
      cooldownOverlay.classList.add('hidden');
      cooldownTimer = null;
      cooldownEndTime = null;
    } else {
      const minutes = Math.floor(remainingTime / 60000);
      const seconds = Math.floor((remainingTime % 60000) / 1000);
      cooldownText.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}


document.addEventListener('DOMContentLoaded', function () {

  // UI Elements
  const normalTab = document.getElementById('normal-tab');
  const nsfwTab = document.getElementById('nsfw-tab');
  const nsfwWarning = document.getElementById('nsfw-warning');
  const animationContainer = document.getElementById('animation-container');
  const promptInput = document.getElementById('prompt');
  const generateBtn = document.getElementById('generate-btn');
  const generateBtnText = document.getElementById('generate-btn-text');
  const simpleBtn = document.getElementById('simple-btn');
  const cooldownOverlay = document.getElementById('cooldown-overlay');
  const cooldownText = document.getElementById('cooldown-text');
  const quickPrompts = document.getElementById('quick-prompts');
  
  // State variables
  let currentMode = 'normal';
  let currentAnimationExamples = normalAnimationExamples;
  let animationInterval;
  let currentIndex = 0;
  let isUserTyping = false;
  let userTypingTimeout;
  let isGenerating = false;
  

  // Tab switching functionality
  normalTab.addEventListener('click', () => switchMode('normal'));
  nsfwTab.addEventListener('click', () => switchMode('nsfw'));

  setLeftUsage();

  function switchMode(mode) {
    currentMode = mode;
    
    // Update tab appearance
    normalTab.classList.toggle('active', mode === 'normal');
    nsfwTab.classList.toggle('active', mode === 'nsfw');
    
    // Show/hide NSFW warning
    nsfwWarning.classList.toggle('hidden', mode === 'normal');
    
    // Update animation examples
    currentAnimationExamples = mode === 'normal' ? normalAnimationExamples : nsfwAnimationExamples;
    
    // Update prompt chips
    updatePromptChips(mode === 'normal' ? normalQuickPrompts : nsfwQuickPrompts);
    
    // Restart animation with new examples
    clearInterval(animationInterval);
    currentIndex = 0;
    initializeAnimation();
  }

  function updatePromptChips(chips) {
    quickPrompts.innerHTML = '<span class="text-sm text-amber-700 font-medium">Quick prompts:</span>';
    chips.forEach(chipText => {
      const chip = document.createElement('button');
      chip.className = 'prompt-chip bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm transition-colors';
      chip.textContent = chipText;
      chip.addEventListener('click', function() {
        promptInput.value = this.textContent.trim();
        promptInput.focus();
      });
      quickPrompts.appendChild(chip);
    });
  }

  

  // Button loading state
  function setButtonLoading(
    loading,
    btn,
    config = {
      normalText: '<i class="fas fa-magic mr-2"></i> Generate Art'
    }
  ) {
    isGenerating = loading;
    if (loading) {
      btn.disabled = true;
      btn.classList.add('button-loading');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating...';
    } else {
      btn.classList.remove('button-loading');
      btn.innerHTML = config.normalText;
    }
  }

  // Create initial animation setup
  function initializeAnimation() {
    // Clear existing content
    animationContainer.innerHTML = '';
    
    // Create first image
    const firstExample = currentAnimationExamples[0];
    createAnimationFrame(firstExample, true);
    startAutoAnimation();
  }

  // Create animation frame
  function createAnimationFrame(example, isInitial = false) {
    const imageDiv = document.createElement('div');
    imageDiv.className = `animation-image ${isInitial ? 'fade-in' : 'fade-out'}`;
    imageDiv.innerHTML = `
                <img src="${example.image}" alt="Anime inspiration" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            `;

    animationContainer.appendChild(imageDiv);

    // Clean up old images
    const images = animationContainer.querySelectorAll('.animation-image');
    if (images.length > 2) {
      images[0].remove();
    }

    // Fade in new image
    if (!isInitial) {
      setTimeout(() => {
        imageDiv.classList.remove('fade-out');
        imageDiv.classList.add('fade-in');
      }, 100);
    }
  }

  // Start automatic animation
  function startAutoAnimation() {
    animationInterval = setInterval(() => {
      if (!isUserTyping) {
        currentIndex = (currentIndex + 1) % currentAnimationExamples.length;
        const example = currentAnimationExamples[currentIndex];
        createAnimationFrame(example);

        // Update input placeholder with current prompt
        setTimeout(() => {
          if (!promptInput.value.trim()) {
            promptInput.placeholder = example.prompt.substring(0, 100) + "...";
          }
        }, 1000);
      }
    }, 4000); // Change every 4 seconds
  }

  // Stop animation when user starts typing
  promptInput.addEventListener('input', function () {
    isUserTyping = this.value.trim().length > 0;
    clearTimeout(userTypingTimeout);

    if (isUserTyping) {
      clearInterval(animationInterval);
    } else {
      // Resume animation after user stops typing for 3 seconds
      userTypingTimeout = setTimeout(() => {
        if (!promptInput.value.trim()) {
          isUserTyping = false;
          startAutoAnimation();
        }
      }, 3000);
    }
  });

  // Handle focus and blur events
  promptInput.addEventListener('focus', function () {
    this.style.transform = 'scale(1.02)';
    this.style.boxShadow = '0 0 20px rgba(252, 182, 159, 0.4)';
  });

  promptInput.addEventListener('blur', function () {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });

  // Click on animation to copy prompt
  animationContainer.addEventListener('click', function () {
    if (!isUserTyping && currentAnimationExamples[currentIndex]) {
      promptInput.value = currentAnimationExamples[currentIndex].prompt;
      promptInput.focus();

      // Visual feedback
      const feedback = document.createElement('div');
      feedback.className = 'absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs slide-in';
      feedback.textContent = 'Prompt copied!';
      animationContainer.style.position = 'relative';
      animationContainer.appendChild(feedback);

      setTimeout(() => {
        feedback.remove();
      }, 2000);
    }
  });

  // Initialize the animation system
  initializeAnimation();
  updatePromptChips(normalQuickPrompts);

  updateLeftUsage();

  // Rest of the original functionality
  const resultContainer = document.getElementById('result-container');
  const loadingState = document.getElementById('loading-state');
  const errorState = document.getElementById('error-state');
  const resultState = document.getElementById('result-state');
  const emptyState = document.getElementById('empty-state');
  const generatedImage = document.getElementById('generated-image');
  const generatedPrompt = document.getElementById('generated-prompt');

  // Generate button click handler
  generateBtn.addEventListener('click', function () {
    const prompt = promptInput.value.trim();

    if (!prompt) {
      showError("Please enter a prompt to generate anime art");
      return;
    }

    if (isGenerating) return;

    // Set button to loading state
    setButtonLoading(true, generateBtn);

    // Show loading state
    loadingState.classList.remove('hidden');
    errorState.classList.add('hidden');
    resultState.classList.add('hidden');
    emptyState.classList.add('hidden');

    // Simulate API call with timeout
    setTimeout(() => {
      // For demo purposes, we'll randomly succeed or fail
      const shouldFail = Math.random() < 0.15; // 15% chance of failure

      setButtonLoading(false, generateBtn);

      if (shouldFail) {
        showError("Our servers are busy. Please try again in a moment.");
      } else {
        // Show result with a random sample image
        showResult(prompt);
        // Start cooldown after successful generation
        startCooldown(cooldownOverlay, cooldownText);
      }
    }, 2000 + Math.random() * 3000); // Random delay between 2-5 seconds
  });

  // Simple button click handler
  simpleBtn.addEventListener('click', function() {
    const prompt = promptInput.value.trim();

    if (!prompt) {
      showError("Please enter a prompt to generate anime art");
      return;
    }

    // Simple generation with no cooldown and faster processing
    setButtonLoading(true, simpleBtn);
    
    // Show loading state
    loadingState.classList.remove('hidden');
    errorState.classList.add('hidden');
    resultState.classList.add('hidden');
    emptyState.classList.add('hidden');

    // Faster generation for simple mode
    setTimeout(() => {
      setButtonLoading(false, simpleBtn, { normalText: '<i class="fas fa-bolt mr-2"></i> Simple' });
      showResult(prompt);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  });

  function showError(message) {
    loadingState.classList.add('hidden');
    errorState.classList.remove('hidden');
    document.getElementById('error-message').textContent = message;
  }

  function showResult(prompt) {
    loadingState.classList.add('hidden');
    resultState.classList.remove('hidden');

    // For demo, use a random sample image
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    generatedImage.src = randomImage;
    generatedImage.alt = prompt;
    generatedPrompt.textContent = `"${prompt}"`;

    // Fade in the image
    generatedImage.style.opacity = 0;
    setTimeout(() => {
      generatedImage.style.transition = 'opacity 0.5s ease';
      generatedImage.style.opacity = 1;
    }, 100);
  }

  // Error state try again button
  errorState.querySelector('button').addEventListener('click', function () {
    generateBtn.click();
  });
});

const UsageLeftLocalstorage = "usage_left";

function getLeftUsage () {
  const item = localStorage.getItem(UsageLeftLocalstorage);
  try {
    return JSON.parse(item);
  } catch (err) {
    return null;
  }
}

function setLeftUsage (count) {
  const prevTimestamp = Date.now();
  localStorage.setItem(UsageLeftLocalstorage, JSON.stringify({ count, prevTimestamp }));
}

function updateLeftUsage () {
  const el = document.querySelector('#left-usage');
  if (!el) return;
  const used = getLeftUsage()?.count || 0;
  setLeftUsage(count + 1);
  el.innerHTML = 50 - used;
}

