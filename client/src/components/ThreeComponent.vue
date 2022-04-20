<template>
  <Renderer
    ref="renderer"
    resize
    antialias
    :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }"
  >
    <Camera :position="{ x: 0, y: 0, z: 10 }" />
    <Scene background="#ffffff">
      <Box ref="mesh" :size="3" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <BasicMaterial>
          <Texture :src="imageUrl" refraction :refraction-ratio="0.95" />
        </BasicMaterial>
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import {
  Box,
  Camera,
  StandardMaterial,
  Renderer,
  Scene,
  Texture,
  PhongMaterial,
  MatcapMaterial,
  LambertMaterial,
  ShaderMaterial,
  BasicMaterial,
  CubeTexture,
} from "troisjs";
export default {
  data() {
    return {
      imageUrl:
        "https://image.goat.com/750/attachments/product_template_pictures/images/067/561/185/original/887470_00.png.png",
    };
  },
  components: {
    Box,
    Camera,
    Renderer,
    Scene,
    StandardMaterial,
    Texture,
    PhongMaterial,
    MatcapMaterial,
    LambertMaterial,
    ShaderMaterial,
    BasicMaterial,
    CubeTexture,
  },
  props: {
    title: String,
  },
};
</script>
