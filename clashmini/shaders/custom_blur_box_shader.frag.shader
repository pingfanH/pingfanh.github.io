                  Ī;  @   (                  BASIC            .:      ĘėÞ.ŧ?                    Ð     Nęĸĸ   d    X    Â     D  #   
                   GLSL.std.450                     main       N                Ė   
 GL_GOOGLE_cpp_style_line_directive    GL_GOOGLE_include_directive      main      	   color        texture0         v_uv      N   fragColor    	 Q   sc3d_render_output_flipped   
 R   sc3d_support_luminance_formats    S   sc3d_debug    T   sc3d_debug_albedo     U   sc3d_debug_normals   	 V   sc3d_debug_vertex_normals    
 W   sc3d_debug_material_metallic     
 X   sc3d_debug_material_roughness     Y   sc3d_debug_material_ao   	 Z   sc3d_debug_lightmap_diffuse  
 [   sc3d_debug_lightmap_specular      \   sc3d_debug_lightmap_specular_mip0     ]   sc3d_debug_lightmap_specular_mip1     ^   sc3d_debug_lightmap_specular_mip2     _   sc3d_debug_lightmap_specular_mip3     `   sc3d_debug_lightmap_specular_mip4    	 a   sc3d_debug_pbr_diffuse_term  
 b   sc3d_debug_pbr_specular_term      c   sc3d_debug_emission   d   sc3d_debug_opacity    e   sc3d_material_ambient     f   sc3d_material_diffuse    	 g   sc3d_material_diffuse_tex    	 h   sc3d_material_vertex_color   	 i   sc3d_material_diffuse_color   j   sc3d_material_specular   	 k   sc3d_material_specular_tex   
 l   sc3d_material_specular_color      m   sc3d_material_stencil     n   sc3d_material_colorize   	 o   sc3d_material_colorize_tex   
 p   sc3d_material_colorize_color      q   sc3d_material_emission   	 r   sc3d_material_emission_tex   
 s   sc3d_material_emission_color      t   sc3d_material_opacity    	 u   sc3d_material_opacity_tex    	 v   sc3d_material_opacity_value   w   sc3d_material_lightmap   
 x   sc3d_material_lightmap_diffuse   
 y   sc3d_material_lightmap_ambient   
 z   sc3d_material_lightmap_specular  
 {   sc3d_material_baked_lightmap      |   sc3d_material_colortransform_mul      }   sc3d_material_colortransform_add      ~   sc3d_material_cutout         sc3d_material_normal     	    sc3d_material_clip_plane     	    sc3d_material_color_grading      sc3d_material_sss        sc3d_material_instanced  	    sc3d_material_gpu_skinned        sc3d_gamma_correct   	    stage_sample_render_target   
    stage_sample_luminance_alpha         stage_sample_luminance   	    stage_blend_mode_additive   G     "      G     !       G            G  N          G  Q      d   G  R      e   G  S      Č   G  T      É   G  U      Ę   G  V      Ë   G  W      Ė   G  X      Í   G  Y      Î   G  Z      Ï   G  [      Ð   G  \      Ņ   G  ]      Ō   G  ^      Ó   G  _      Ô   G  `      Õ   G  a      Ö   G  b      Ũ   G  c      Ø   G  d      Ų   G  e      -  G  f      .  G  g      /  G  h      0  G  i      1  G  j      2  G  k      3  G  l      4  G  m      5  G  n      6  G  o      7  G  p      8  G  q      9  G  r      :  G  s      ;  G  t      <  G  u      =  G  v      >  G  w      ?  G  x      @  G  y      A  G  z      B  G  {      C  G  |      D  G  }      E  G  ~      F  G        G  G        H  G        I  G        J  G        K  G        L  G        ,  G          G          G          G               !                                         	 
                                 
                ;                                    +                                  ;                       +                        +        n>+           +     &      +     .      +     6      +     >      +     F         M         ;  M   N        P   1  P   Q   1  P   R   1  P   S   1  P   T   1  P   U   1  P   V   1  P   W   1  P   X   1  P   Y   1  P   Z   1  P   [   1  P   \   1  P   ]   1  P   ^   1  P   _   1  P   `   1  P   a   1  P   b   1  P   c   1  P   d   1  P   e   1  P   f   1  P   g   1  P   h   1  P   i   1  P   j   1  P   k   1  P   l   1  P   m   1  P   n   1  P   o   1  P   p   1  P   q   1  P   r   1  P   s   1  P   t   1  P   u   1  P   v   1  P   w   1  P   x   1  P   y   1  P   z   1  P   {   1  P   |   1  P   }   1  P   ~   1  P      1  P      1  P      1  P      1  P      1  P      1  P      1  P      1  P      1  P      1  P      6               ø     ;     	      =           A              =           W                            >  	      =           A              =            W     !               "   !      =     #   	        $   #   "   >  	   $   =     %      A     '      &   =     (   '   W     )   %   (        *   )      =     +   	        ,   +   *   >  	   ,   =     -      A     /      .   =     0   /   W     1   -   0        2   1      =     3   	        4   3   2   >  	   4   =     5      A     7      6   =     8   7   W     9   5   8        :   9      =     ;   	        <   ;   :   >  	   <   =     =      A     ?      >   =     @   ?   W     A   =   @        B   A      =     C   	        D   C   B   >  	   D   =     E      A     G      F   =     H   G   W     I   E   H        J   I      =     K   	        L   K   J   >  	   L   =     O   	   >  N   O   ý  8            Úĸĸ            texture0          Úĸĸ         v_uv                     %  @%   %    ,     ę$  #version 300 es
precision mediump float;
precision highp int;

#ifndef SPIRV_CROSS_CONSTANT_ID_100
#define SPIRV_CROSS_CONSTANT_ID_100 false
#endif
const bool sc3d_render_output_flipped = SPIRV_CROSS_CONSTANT_ID_100;
#ifndef SPIRV_CROSS_CONSTANT_ID_101
#define SPIRV_CROSS_CONSTANT_ID_101 false
#endif
const bool sc3d_support_luminance_formats = SPIRV_CROSS_CONSTANT_ID_101;
#ifndef SPIRV_CROSS_CONSTANT_ID_200
#define SPIRV_CROSS_CONSTANT_ID_200 false
#endif
const bool sc3d_debug = SPIRV_CROSS_CONSTANT_ID_200;
#ifndef SPIRV_CROSS_CONSTANT_ID_201
#define SPIRV_CROSS_CONSTANT_ID_201 false
#endif
const bool sc3d_debug_albedo = SPIRV_CROSS_CONSTANT_ID_201;
#ifndef SPIRV_CROSS_CONSTANT_ID_202
#define SPIRV_CROSS_CONSTANT_ID_202 false
#endif
const bool sc3d_debug_normals = SPIRV_CROSS_CONSTANT_ID_202;
#ifndef SPIRV_CROSS_CONSTANT_ID_203
#define SPIRV_CROSS_CONSTANT_ID_203 false
#endif
const bool sc3d_debug_vertex_normals = SPIRV_CROSS_CONSTANT_ID_203;
#ifndef SPIRV_CROSS_CONSTANT_ID_204
#define SPIRV_CROSS_CONSTANT_ID_204 false
#endif
const bool sc3d_debug_material_metallic = SPIRV_CROSS_CONSTANT_ID_204;
#ifndef SPIRV_CROSS_CONSTANT_ID_205
#define SPIRV_CROSS_CONSTANT_ID_205 false
#endif
const bool sc3d_debug_material_roughness = SPIRV_CROSS_CONSTANT_ID_205;
#ifndef SPIRV_CROSS_CONSTANT_ID_206
#define SPIRV_CROSS_CONSTANT_ID_206 false
#endif
const bool sc3d_debug_material_ao = SPIRV_CROSS_CONSTANT_ID_206;
#ifndef SPIRV_CROSS_CONSTANT_ID_207
#define SPIRV_CROSS_CONSTANT_ID_207 false
#endif
const bool sc3d_debug_lightmap_diffuse = SPIRV_CROSS_CONSTANT_ID_207;
#ifndef SPIRV_CROSS_CONSTANT_ID_208
#define SPIRV_CROSS_CONSTANT_ID_208 false
#endif
const bool sc3d_debug_lightmap_specular = SPIRV_CROSS_CONSTANT_ID_208;
#ifndef SPIRV_CROSS_CONSTANT_ID_209
#define SPIRV_CROSS_CONSTANT_ID_209 false
#endif
const bool sc3d_debug_lightmap_specular_mip0 = SPIRV_CROSS_CONSTANT_ID_209;
#ifndef SPIRV_CROSS_CONSTANT_ID_210
#define SPIRV_CROSS_CONSTANT_ID_210 false
#endif
const bool sc3d_debug_lightmap_specular_mip1 = SPIRV_CROSS_CONSTANT_ID_210;
#ifndef SPIRV_CROSS_CONSTANT_ID_211
#define SPIRV_CROSS_CONSTANT_ID_211 false
#endif
const bool sc3d_debug_lightmap_specular_mip2 = SPIRV_CROSS_CONSTANT_ID_211;
#ifndef SPIRV_CROSS_CONSTANT_ID_212
#define SPIRV_CROSS_CONSTANT_ID_212 false
#endif
const bool sc3d_debug_lightmap_specular_mip3 = SPIRV_CROSS_CONSTANT_ID_212;
#ifndef SPIRV_CROSS_CONSTANT_ID_213
#define SPIRV_CROSS_CONSTANT_ID_213 false
#endif
const bool sc3d_debug_lightmap_specular_mip4 = SPIRV_CROSS_CONSTANT_ID_213;
#ifndef SPIRV_CROSS_CONSTANT_ID_214
#define SPIRV_CROSS_CONSTANT_ID_214 false
#endif
const bool sc3d_debug_pbr_diffuse_term = SPIRV_CROSS_CONSTANT_ID_214;
#ifndef SPIRV_CROSS_CONSTANT_ID_215
#define SPIRV_CROSS_CONSTANT_ID_215 false
#endif
const bool sc3d_debug_pbr_specular_term = SPIRV_CROSS_CONSTANT_ID_215;
#ifndef SPIRV_CROSS_CONSTANT_ID_216
#define SPIRV_CROSS_CONSTANT_ID_216 false
#endif
const bool sc3d_debug_emission = SPIRV_CROSS_CONSTANT_ID_216;
#ifndef SPIRV_CROSS_CONSTANT_ID_217
#define SPIRV_CROSS_CONSTANT_ID_217 false
#endif
const bool sc3d_debug_opacity = SPIRV_CROSS_CONSTANT_ID_217;
#ifndef SPIRV_CROSS_CONSTANT_ID_301
#define SPIRV_CROSS_CONSTANT_ID_301 false
#endif
const bool sc3d_material_ambient = SPIRV_CROSS_CONSTANT_ID_301;
#ifndef SPIRV_CROSS_CONSTANT_ID_302
#define SPIRV_CROSS_CONSTANT_ID_302 false
#endif
const bool sc3d_material_diffuse = SPIRV_CROSS_CONSTANT_ID_302;
#ifndef SPIRV_CROSS_CONSTANT_ID_303
#define SPIRV_CROSS_CONSTANT_ID_303 false
#endif
const bool sc3d_material_diffuse_tex = SPIRV_CROSS_CONSTANT_ID_303;
#ifndef SPIRV_CROSS_CONSTANT_ID_304
#define SPIRV_CROSS_CONSTANT_ID_304 false
#endif
const bool sc3d_material_vertex_color = SPIRV_CROSS_CONSTANT_ID_304;
#ifndef SPIRV_CROSS_CONSTANT_ID_305
#define SPIRV_CROSS_CONSTANT_ID_305 false
#endif
const bool sc3d_material_diffuse_color = SPIRV_CROSS_CONSTANT_ID_305;
#ifndef SPIRV_CROSS_CONSTANT_ID_306
#define SPIRV_CROSS_CONSTANT_ID_306 false
#endif
const bool sc3d_material_specular = SPIRV_CROSS_CONSTANT_ID_306;
#ifndef SPIRV_CROSS_CONSTANT_ID_307
#define SPIRV_CROSS_CONSTANT_ID_307 false
#endif
const bool sc3d_material_specular_tex = SPIRV_CROSS_CONSTANT_ID_307;
#ifndef SPIRV_CROSS_CONSTANT_ID_308
#define SPIRV_CROSS_CONSTANT_ID_308 false
#endif
const bool sc3d_material_specular_color = SPIRV_CROSS_CONSTANT_ID_308;
#ifndef SPIRV_CROSS_CONSTANT_ID_309
#define SPIRV_CROSS_CONSTANT_ID_309 false
#endif
const bool sc3d_material_stencil = SPIRV_CROSS_CONSTANT_ID_309;
#ifndef SPIRV_CROSS_CONSTANT_ID_310
#define SPIRV_CROSS_CONSTANT_ID_310 false
#endif
const bool sc3d_material_colorize = SPIRV_CROSS_CONSTANT_ID_310;
#ifndef SPIRV_CROSS_CONSTANT_ID_311
#define SPIRV_CROSS_CONSTANT_ID_311 false
#endif
const bool sc3d_material_colorize_tex = SPIRV_CROSS_CONSTANT_ID_311;
#ifndef SPIRV_CROSS_CONSTANT_ID_312
#define SPIRV_CROSS_CONSTANT_ID_312 false
#endif
const bool sc3d_material_colorize_color = SPIRV_CROSS_CONSTANT_ID_312;
#ifndef SPIRV_CROSS_CONSTANT_ID_313
#define SPIRV_CROSS_CONSTANT_ID_313 false
#endif
const bool sc3d_material_emission = SPIRV_CROSS_CONSTANT_ID_313;
#ifndef SPIRV_CROSS_CONSTANT_ID_314
#define SPIRV_CROSS_CONSTANT_ID_314 false
#endif
const bool sc3d_material_emission_tex = SPIRV_CROSS_CONSTANT_ID_314;
#ifndef SPIRV_CROSS_CONSTANT_ID_315
#define SPIRV_CROSS_CONSTANT_ID_315 false
#endif
const bool sc3d_material_emission_color = SPIRV_CROSS_CONSTANT_ID_315;
#ifndef SPIRV_CROSS_CONSTANT_ID_316
#define SPIRV_CROSS_CONSTANT_ID_316 false
#endif
const bool sc3d_material_opacity = SPIRV_CROSS_CONSTANT_ID_316;
#ifndef SPIRV_CROSS_CONSTANT_ID_317
#define SPIRV_CROSS_CONSTANT_ID_317 false
#endif
const bool sc3d_material_opacity_tex = SPIRV_CROSS_CONSTANT_ID_317;
#ifndef SPIRV_CROSS_CONSTANT_ID_318
#define SPIRV_CROSS_CONSTANT_ID_318 false
#endif
const bool sc3d_material_opacity_value = SPIRV_CROSS_CONSTANT_ID_318;
#ifndef SPIRV_CROSS_CONSTANT_ID_319
#define SPIRV_CROSS_CONSTANT_ID_319 false
#endif
const bool sc3d_material_lightmap = SPIRV_CROSS_CONSTANT_ID_319;
#ifndef SPIRV_CROSS_CONSTANT_ID_320
#define SPIRV_CROSS_CONSTANT_ID_320 false
#endif
const bool sc3d_material_lightmap_diffuse = SPIRV_CROSS_CONSTANT_ID_320;
#ifndef SPIRV_CROSS_CONSTANT_ID_321
#define SPIRV_CROSS_CONSTANT_ID_321 false
#endif
const bool sc3d_material_lightmap_ambient = SPIRV_CROSS_CONSTANT_ID_321;
#ifndef SPIRV_CROSS_CONSTANT_ID_322
#define SPIRV_CROSS_CONSTANT_ID_322 false
#endif
const bool sc3d_material_lightmap_specular = SPIRV_CROSS_CONSTANT_ID_322;
#ifndef SPIRV_CROSS_CONSTANT_ID_323
#define SPIRV_CROSS_CONSTANT_ID_323 false
#endif
const bool sc3d_material_baked_lightmap = SPIRV_CROSS_CONSTANT_ID_323;
#ifndef SPIRV_CROSS_CONSTANT_ID_324
#define SPIRV_CROSS_CONSTANT_ID_324 false
#endif
const bool sc3d_material_colortransform_mul = SPIRV_CROSS_CONSTANT_ID_324;
#ifndef SPIRV_CROSS_CONSTANT_ID_325
#define SPIRV_CROSS_CONSTANT_ID_325 false
#endif
const bool sc3d_material_colortransform_add = SPIRV_CROSS_CONSTANT_ID_325;
#ifndef SPIRV_CROSS_CONSTANT_ID_326
#define SPIRV_CROSS_CONSTANT_ID_326 false
#endif
const bool sc3d_material_cutout = SPIRV_CROSS_CONSTANT_ID_326;
#ifndef SPIRV_CROSS_CONSTANT_ID_327
#define SPIRV_CROSS_CONSTANT_ID_327 false
#endif
const bool sc3d_material_normal = SPIRV_CROSS_CONSTANT_ID_327;
#ifndef SPIRV_CROSS_CONSTANT_ID_328
#define SPIRV_CROSS_CONSTANT_ID_328 false
#endif
const bool sc3d_material_clip_plane = SPIRV_CROSS_CONSTANT_ID_328;
#ifndef SPIRV_CROSS_CONSTANT_ID_329
#define SPIRV_CROSS_CONSTANT_ID_329 false
#endif
const bool sc3d_material_color_grading = SPIRV_CROSS_CONSTANT_ID_329;
#ifndef SPIRV_CROSS_CONSTANT_ID_330
#define SPIRV_CROSS_CONSTANT_ID_330 false
#endif
const bool sc3d_material_sss = SPIRV_CROSS_CONSTANT_ID_330;
#ifndef SPIRV_CROSS_CONSTANT_ID_331
#define SPIRV_CROSS_CONSTANT_ID_331 false
#endif
const bool sc3d_material_instanced = SPIRV_CROSS_CONSTANT_ID_331;
#ifndef SPIRV_CROSS_CONSTANT_ID_332
#define SPIRV_CROSS_CONSTANT_ID_332 false
#endif
const bool sc3d_material_gpu_skinned = SPIRV_CROSS_CONSTANT_ID_332;
#ifndef SPIRV_CROSS_CONSTANT_ID_300
#define SPIRV_CROSS_CONSTANT_ID_300 false
#endif
const bool sc3d_gamma_correct = SPIRV_CROSS_CONSTANT_ID_300;
#ifndef SPIRV_CROSS_CONSTANT_ID_400
#define SPIRV_CROSS_CONSTANT_ID_400 false
#endif
const bool stage_sample_render_target = SPIRV_CROSS_CONSTANT_ID_400;
#ifndef SPIRV_CROSS_CONSTANT_ID_401
#define SPIRV_CROSS_CONSTANT_ID_401 false
#endif
const bool stage_sample_luminance_alpha = SPIRV_CROSS_CONSTANT_ID_401;
#ifndef SPIRV_CROSS_CONSTANT_ID_402
#define SPIRV_CROSS_CONSTANT_ID_402 false
#endif
const bool stage_sample_luminance = SPIRV_CROSS_CONSTANT_ID_402;
#ifndef SPIRV_CROSS_CONSTANT_ID_403
#define SPIRV_CROSS_CONSTANT_ID_403 false
#endif
const bool stage_blend_mode_additive = SPIRV_CROSS_CONSTANT_ID_403;

uniform highp sampler2D texture0;

in highp vec2 v_uv[7];
layout(location = 0) out highp vec4 fragColor;

void main()
{
    highp vec4 color = texture(texture0, v_uv[0]) * 0.14300000667572021484375;
    color += (texture(texture0, v_uv[1]) * 0.14300000667572021484375);
    color += (texture(texture0, v_uv[2]) * 0.14300000667572021484375);
    color += (texture(texture0, v_uv[3]) * 0.14300000667572021484375);
    color += (texture(texture0, v_uv[4]) * 0.14300000667572021484375);
    color += (texture(texture0, v_uv[5]) * 0.14300000667572021484375);
    color += (texture(texture0, v_uv[6]) * 0.14300000667572021484375);
    fragColor = color;
}

                                      texture0                          v_uv        