/** import spinkit css **/
import "spinkit/css/spinkit.css"
import "./load.css"

/** tool functions **/
function rotatingPlane() {
  let dom = document.createElement('div');
  dom.className = "sk-rotating-plane";
  return dom;
}

function doubleBounce() {
  let dom = document.createElement("div");
  dom.className = "sk-double-bounce";

  let innerDom1 = document.createElement("div");
  innerDom1.className = "sk-child sk-double-bounce1";
  let innerDom2 = document.createElement("div");
  innerDom2.className = "sk-child sk-double-bounce2";
  dom.appendChild(innerDom1);
  dom.appendChild(innerDom2);

  return dom;
}

function wave() {
  let dom = document.createElement("div");
  dom.className = "sk-wave";

  for (let i = 0; i < 4; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-rect sk-rect${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function wanderingCubes() {
  let dom = document.createElement("div");
  dom.className = "sk-wandering-cubes";

  for (let i = 0; i < 2; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-cube sk-cube${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function spinner() {
  let dom = document.createElement("div");
  dom.className = "sk-spinner sk-spinner-pulse";
  return dom;
}

function chasingDots() {
  let dom = document.createElement("div");
  dom.className = "sk-chasing-dots";

  for (let i = 0; i < 2; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-child sk-dot${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function threeBounce() {
  let dom = document.createElement("div");
  dom.className = "sk-three-bounce";

  for (let i = 0; i < 3; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-child sk-bounce${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function circle() {
  let dom = document.createElement("div");
  dom.className = "sk-circle";

  for (let i = 0; i < 12; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-child sk-circle${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function cubeGrid() {
  let dom = document.createElement("div");
  dom.className = "sk-cube-grid";

  for (let i = 0; i < 9; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-cube sk-cube${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function fadingCircle() {
  let dom = document.createElement("div");
  dom.className = "sk-fading-circle";

  for (let i = 0; i < 12; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-circle sk-circle${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

function foldingCube() {
  let dom = document.createElement("div");
  dom.className = "sk-folding-cube";

  for (let i = 0; i < 4; i++) {
    let innerDom = document.createElement("div");
    innerDom.className = `sk-cube sk-cube${i + 1}`;
    dom.appendChild(innerDom);
  }
  return dom;
}

const loadConfig = [
  {
    name: "rotating-plane",
    func: rotatingPlane
  },
  {
    name: "double-bounce",
    func: doubleBounce
  },
  {
    name: "wave",
    func: wave
  },
  {
    name: "wandering-cubes",
    func: wanderingCubes
  },
  {
    name: "spinner",
    func: spinner
  },
  {
    name: "chasing-dots",
    func: chasingDots
  },
  {
    name: "three-bounce",
    func: threeBounce
  },
  {
    name: "circle",
    func: circle
  },
  {
    name: "cube-grid",
    func: cubeGrid
  },
  {
    name: "fading-circle",
    func: fadingCircle
  },
  {
    name: "folding-cube",
    func: foldingCube
  }
];

function insertLoading(el, cover){
  let typeName = el.getAttribute('load-type') || "circle";
  loadConfig.some((v) => {
    if (v.name === typeName) {
      cover.appendChild(v.func());
      return;
    }
  });
}

function setBgColor(el, cover){
  // set cover background
  let bgName = el.getAttribute('load-background');
  bgName && (cover.style.backgroundColor = bgName);
}

// export plugin
const easyLoading = {
  install: function (Vue, options) {
    Vue.directive('load', {
      inserted(el, binding, vnode) {
        // add el class
        el.className += el.className.length > 0 ? " loadParent" : "loadParent";
        // create cover
        let cover = document.createElement('div');
        cover.className = binding.value ? "loadCover loadCoverShow" : "loadCover";
        el.appendChild(cover);

        // set cover background
        setBgColor(el, cover);
        insertLoading(el, cover);
      },
      update(el, binding) {
        let cover = el.getElementsByClassName('loadCover')[0];
        cover.innerHTML = "";
        setBgColor(el, cover);
        insertLoading(el, cover);
        cover.className = binding.value ? "loadCover loadCoverShow" : "loadCover";
      }
    })
  }
};

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(easyLoading)
}

export default easyLoading;
