                  ô;  @   (                  BASIC            ~:      6£ÔØzù                          êÿÿ     ¸      Â     t  #   
                   GLSL.std.450                     main       Q                Ì   
 GL_GOOGLE_cpp_style_line_directive    GL_GOOGLE_include_directive      main      	   color        texture0         v_uv      Q   fragColor    	 T   sc3d_render_output_flipped   
 U   sc3d_support_luminance_formats    V   sc3d_debug    W   sc3d_debug_albedo     X   sc3d_debug_normals   	 Y   sc3d_debug_vertex_normals    
 Z   sc3d_debug_material_metallic     
 [   sc3d_debug_material_roughness     \   sc3d_debug_material_ao   	 ]   sc3d_debug_lightmap_diffuse  
 ^   sc3d_debug_lightmap_specular      _   sc3d_debug_lightmap_specular_mip0     `   sc3d_debug_lightmap_specular_mip1     a   sc3d_debug_lightmap_specular_mip2     b   sc3d_debug_lightmap_specular_mip3     c   sc3d_debug_lightmap_specular_mip4    	 d   sc3d_debug_pbr_diffuse_term  
 e   sc3d_debug_pbr_specular_term      f   sc3d_debug_emission   g   sc3d_debug_opacity    h   sc3d_material_ambient     i   sc3d_material_diffuse    	 j   sc3d_material_diffuse_tex    	 k   sc3d_material_vertex_color   	 l   sc3d_material_diffuse_color   m   sc3d_material_specular   	 n   sc3d_material_specular_tex   
 o   sc3d_material_specular_color      p   sc3d_material_stencil     q   sc3d_material_colorize   	 r   sc3d_material_colorize_tex   
 s   sc3d_material_colorize_color      t   sc3d_material_emission   	 u   sc3d_material_emission_tex   
 v   sc3d_material_emission_color      w   sc3d_material_opacity    	 x   sc3d_material_opacity_tex    	 y   sc3d_material_opacity_value   z   sc3d_material_lightmap   
 {   sc3d_material_lightmap_diffuse   
 |   sc3d_material_lightmap_ambient   
 }   sc3d_material_lightmap_specular  
 ~   sc3d_material_baked_lightmap         sc3d_material_colortransform_mul         sc3d_material_colortransform_add         sc3d_material_cutout         sc3d_material_normal     	    sc3d_material_clip_plane     	    sc3d_material_color_grading      sc3d_material_sss        sc3d_material_instanced  	    sc3d_material_gpu_skinned        sc3d_gamma_correct   	    stage_sample_render_target   
    stage_sample_luminance_alpha         stage_sample_luminance   	    stage_blend_mode_additive   G     "      G     !       G            G  Q          G  T      d   G  U      e   G  V      È   G  W      É   G  X      Ê   G  Y      Ë   G  Z      Ì   G  [      Í   G  \      Î   G  ]      Ï   G  ^      Ð   G  _      Ñ   G  `      Ò   G  a      Ó   G  b      Ô   G  c      Õ   G  d      Ö   G  e      ×   G  f      Ø   G  g      Ù   G  h      -  G  i      .  G  j      /  G  k      0  G  l      1  G  m      2  G  n      3  G  o      4  G  p      5  G  q      6  G  r      7  G  s      8  G  t      9  G  u      :  G  v      ;  G  w      <  G  x      =  G  y      >  G  z      ?  G  {      @  G  |      A  G  }      B  G  ~      C  G        D  G        E  G        F  G        G  G        H  G        I  G        J  G        K  G        L  G        ,  G          G          G          G               !                                         	 
                                 
                ;                                    +                                  ;                       +                        +        Ä>+           +     "   ÙÎw>+     '      +     +   #Ûy=+     0      +     4   ¦Ä;+     9      +     A      +     I         P         ;  P   Q        S   1  S   T   1  S   U   1  S   V   1  S   W   1  S   X   1  S   Y   1  S   Z   1  S   [   1  S   \   1  S   ]   1  S   ^   1  S   _   1  S   `   1  S   a   1  S   b   1  S   c   1  S   d   1  S   e   1  S   f   1  S   g   1  S   h   1  S   i   1  S   j   1  S   k   1  S   l   1  S   m   1  S   n   1  S   o   1  S   p   1  S   q   1  S   r   1  S   s   1  S   t   1  S   u   1  S   v   1  S   w   1  S   x   1  S   y   1  S   z   1  S   {   1  S   |   1  S   }   1  S   ~   1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      1  S      6               ø     ;     	      =           A              =           W                            >  	      =           A              =            W     !               #   !   "   =     $   	        %   $   #   >  	   %   =     &      A     (      '   =     )   (   W     *   &   )        ,   *   +   =     -   	        .   -   ,   >  	   .   =     /      A     1      0   =     2   1   W     3   /   2        5   3   4   =     6   	        7   6   5   >  	   7   =     8      A     :      9   =     ;   :   W     <   8   ;        =   <   "   =     >   	        ?   >   =   >  	   ?   =     @      A     B      A   =     C   B   W     D   @   C        E   D   +   =     F   	        G   F   E   >  	   G   =     H      A     J      I   =     K   J   W     L   H   K        M   L   4   =     N   	        O   N   M   >  	   O   =     R   	   >  Q   R   ý  8            nÚÿÿ            texture0          `Úÿÿ         v_uv                     ,%  `%   %    ,     
%  #version 300 es
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
    highp vec4 color = texture(texture0, v_uv[0]) * 0.3829999864101409912109375;
    color += (texture(texture0, v_uv[1]) * 0.24199999868869781494140625);
    color += (texture(texture0, v_uv[2]) * 0.0610000006854534149169921875);
    color += (texture(texture0, v_uv[3]) * 0.006000000052154064178466796875);
    color += (texture(texture0, v_uv[4]) * 0.24199999868869781494140625);
    color += (texture(texture0, v_uv[5]) * 0.0610000006854534149169921875);
    color += (texture(texture0, v_uv[6]) * 0.006000000052154064178466796875);
    fragColor = color;
}

                                      texture0                          v_uv        