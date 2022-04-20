<template>
  <Renderer
    ref="renderer"
    resize
    antialias
    :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }"
  >
    <Camera :position="{ x: 0, y: 0, z: 10 }" />
    <Scene background="#ffffff">
      <Box ref="mesh" :size="5" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <ShaderMaterial>
          <Texture src="./logo.png" uniform="myCustomTexture" />
        </ShaderMaterial>
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
} from "troisjs";
export default {
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
  },
};
</script>
