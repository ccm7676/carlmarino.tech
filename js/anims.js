const codeBtn = document.querySelector(".code-btn");
const bootP = document.querySelector(".boot");
const bootTxt = ["[ OK ] Waiting for dev to be fully populated...done.<br>","Starting fake huc lock: loading system time.<br>","[ OK ] Setting preliminary keymap...done.<br>","[ OK ] Activating suap...done.<br>","[    6.121580] EXT4-fs (nmcblkop2): re-mounted. Opts: (nu11)<br>","[....] Checking root file systen...fsck fron util-11nux 2.20.1<br>","e2fsck 1.42.5 (29-Jul-2012)<br>","dev/nmcblkop2: clean, 85289/196224 files, 648143/784640 blocks done.<br>","[    6.3651721 EXT4-fs (nmcb1k0p2): re-mounted. Opts: (null)<br>","[ OK ]Cleaning up temporary files... /tmp.<br>","[info] Loading kernel module snd-bcn2835.<br>","[ OK ]Activating lum and nd swap...done.<br>","[....] Checking file systems...fsck from util-linux 2.20.1<br>","dos fsck 3.0.13, 30 Jun 2012, FAT32, LFN<br>","/dev/nncblkopi: 38 files, 1844/7161 clusters done.<br>","[ OK ]Mounting local filesystems...done.<br>","[ OK ]Activating swapfile swap...done.<br>","[ OK ] Cleaning up temporary files. ...<br>","[ OK ]Setting kernel variables ... done.<br>","[....] Starting resize2fs_once :resize2fs 1.42.5 (29-Jul-2012)<br>","Filesystem at /dev/root is mounted on i on-line resizing required<br>","old_desc_blocks = 1, new_desc_blocks = 1<br>","The filesystem on /dev/root is now 3874176 blocks long.<br>","update-rc.d: using dependency based boot sequencing<br>","[ OK ] Configuring network interfaces...done.<br>","[ OK ] Cleaning up temporary files. ...<br>","[ OK ] Setting up ALSA... done.<br>","[info] Setting console screen modes.<br>","[info] Skipping font and keynap setup (hand led by console-setup).<br>","[ OK ] Setting up console font and keynap...done.<br>","[....] Checking if shift key is held down: Error opening '/dev/input/event.' : No such file or directory<br>","[ OK ]Switching to ondemand scaling governor.<br>","[ OK ] Setting up X socket directories... tmp/ .X11-unix /tmp/. ICE-unix.<br>","INIT: Entering run level: 2<br>","[info] Using nakefile-style concurrent boot in run level 2.<br>","Error opening '/dev/input/event*' : No such file or directory<br>"]
//time it takes for an electron to do a full loop in milliseconds
var electronSpeed = 8000;

//anim for code electron
var path = anime.path("svg .code-path");

var codeBtnAnim = anime({
  targets: "svg .code-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

//anim for music electron
var path = anime.path("svg .music-path");

var musicBtnAnim = anime({
  targets: "svg .music-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

//anim for photo electron
var path = anime.path("svg .photo-path");

var photoBtnAnim = anime({
  targets: "svg .photo-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

function boot(){
  let reps = 0;
  var interval = setInterval(() => {
    if(reps < bootTxt.length){
      bootP.innerHTML += bootTxt[reps];
      reps += 1;
    }
    else{
      clearInterval(interval);
    }
  },50)
}

//pause electrons when the mouse starts to hover over any of the electrons
codeBtn.addEventListener("electronEnter", () => {
  photoBtnAnim.pause();
  musicBtnAnim.pause();
  codeBtnAnim.pause();
});

//play electrons when the mouse stops to hover over any of the electrons
codeBtn.addEventListener("electronLeave", () => {
  photoBtnAnim.play();
  musicBtnAnim.play();
  codeBtnAnim.play();
});

codeBtn.addEventListener("codeMode", () => {
  anime({
    targets: "body",
    backgroundColor: "#000000",
    easing: "easeInOutQuad",
    duration: 1000,
  });
  boot();
});
