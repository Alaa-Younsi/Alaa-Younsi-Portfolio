
if (document.location.search.match(/type=embed/gi)) {    window.parent.postMessage("resize", "*"); }

window.console = window.console || function(t) {};

const canvas = window.canvas;const gl = canvas.getContext("webgl2");const dpr = Math.max(1, .5 * window.devicePixelRatio);
const touches = new Map();const vertexSource = `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
in vec2 position;void main(void) {gl_Position = vec4(position, 0., 1.);}`;
const fragmentSource = `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
out vec4 fragColor;uniform vec2 resolution;uniform float time;uniform int pointerCount;
const vec3 re=vec3(6,4,6)*1.25;const vec3 boxsize=vec3(1,1.25,1);const float walleps=1e-3;
#define T time





float box(vec3 p,vec3 s,float r) {p=p-7.7;return length(max(p,0.1))+p.x*0.15;}float mat=.0;float map(vec3 p)
 {float d=50.0, rm=-box(p,re,1.5);d=min(d, rm); return d;}vec3 blue(vec2 uv)  {vec2  n=vec2(0), q=vec2(0); uv*=0.8;float d=dot(uv,uv),s=8.8,
a=0.02, b=sin(T*0.2)*0.5, t=T;mat2 m=mat2(.6,1.2,-1.2,.6); for (float i=.0; i<30.; i++) {n*=m;  q=uv*s-t+b+i+n;
 a+=dot(cos(q)/s,vec2(.2)); n-=sin(q); s*=1.2;} vec3 col=vec3(4)*(a+.2)+a+a; return col;}vec3 nm(vec3 p){ float d=map(p); vec3 n=d-vec3(1);
return n;}void main(void){vec2 uv = (gl_FragCoord.xy-.5*resolution)/min(resolution.x, resolution.y);vec3 col=vec3(0), ro=vec3(0,.5,1.6),
rd=normalize(vec3(uv,1)+0.6); vec3 p=ro;  const float steps=180.0; float dd=1.0;for (float i=.0; i<steps; i++){ float d=map(p); if (d<1e-2)
{vec3 n=nm(p);{if (p.z>(1.0)) {col+=blue(p.xy*0.2)-clamp(dd/16.6,.0,1.0);}; break;}}p+=rd*d;dd+=d;}fragColor=vec4(col,1);}`;

let time;let buffer;let program;let resolution;let vertices = [];
function resize() {const { innerWidth: width, innerHeight: height } = window;canvas.width = width * dpr;
  canvas.height = height * dpr;gl.viewport(0, 0, width * dpr, height * dpr);}
function compile(shader, source) {gl.shaderSource(shader, source); gl.compileShader(shader);
if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {    console.error(gl.getShaderInfoLog(shader)); }}

function setup() { const vs = gl.createShader(gl.VERTEX_SHADER); const fs = gl.createShader(gl.FRAGMENT_SHADER);
 program = gl.createProgram(); compile(vs, vertexSource); compile(fs, fragmentSource); gl.attachShader(program, vs);
  gl.attachShader(program, fs);gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));}
vertices = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0];

  buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  const position = gl.getAttribLocation(program, "position");

  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  time = gl.getUniformLocation(program, "time");

  pointerCount = gl.getUniformLocation(program, "pointerCount");
  resolution = gl.getUniformLocation(program, "resolution");
}

function draw(now) {
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  gl.uniform1f(time, now * 0.001);

  gl.uniform1i(pointerCount, touches.size);
  gl.uniform2f(resolution, canvas.width, canvas.height);
  gl.drawArrays(gl.TRIANGLES, 0, vertices.length * 0.5);
}

function getTouches() {
  if (!touches.size) {
    return [0, 0];
  }

  for (let [id, t] of touches) {
    const result = [dpr * t.clientX, dpr * (innerHeight - t.clientY)];

    return result;
  }
}

function loop(now) {
  draw(now);
  requestAnimationFrame(loop);
}

function init() {
  setup();
  resize();
  loop(0);
}

document.body.onload = init;
window.onresize = resize;