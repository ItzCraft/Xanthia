
// let musicName = Vars.tree.loadMusic("musicName");
let aMomentOfSilence = Vars.tree.loadMusic("aMomentOfSilence");
let inAMinute = Vars.tree.loadMusic("inAMinute");
let opposition  = Vars.tree.loadMusic("opposition ");


Events.on(ClientLoadEvent, e => {
	// Vars.control.sound.ambientMusic.add(musicName);
	Vars.control.sound.ambientMusic.add(aMomentOfSilence);
	Vars.control.sound.ambientMusic.add(inAMinute);
	Vars.control.sound.bossMusic.add(opposition );
});