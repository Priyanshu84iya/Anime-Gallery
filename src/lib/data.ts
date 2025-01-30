import demonSlayer1 from "/demon-slayer-1.gif";
import demonSlayer2 from "/demon-slayer-2.gif";
import demonSlayer3 from "/demon-slayer-3.gif";
import silentVoice1 from "/silent-voice-1.gif";
import silentVoice2 from "/silent-voice-2.gif";
import silentVoice3 from "/silent-voice-3.gif";
import attackOnTitan1 from "/attack-on-titan-1.gif";
import attackOnTitan2 from "/attack-on-titan-2.gif";
import attackOnTitan3 from "/attack-on-titan-3.gif";
import spiritedAway1 from "/spirited-away-1.gif";
import spiritedAway2 from "/spirited-away-2.gif";
import spiritedAway3 from "/spirited-away-3.gif";
import bunnyGirl1 from "/bunny-girl-1.gif";
import bunnyGirl2 from "/bunny-girl-2.gif";
import bunnyGirl3 from "/bunny-girl-3.gif";

export type AnimeSceneEntry = {
  src: string;
  offsetX: number;
  offsetY: number;
  rotate: number;
};

export const data: Record<string, AnimeSceneEntry[]> = {
  demonSlayer: [
    {
      src: demonSlayer1,
      offsetX: -460,
      offsetY: -190,
      rotate: -8,
    },
    {
      src: demonSlayer2,
      offsetX: -10,
      offsetY: -300,
      rotate: 2,
    },
    {
      src: demonSlayer3,
      offsetX: 430,
      offsetY: -100,
      rotate: -4,
    },
  ],
  silentVoice: [
    {
      src: silentVoice1,
      offsetX: -500,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: silentVoice2,
      offsetX: -10,
      offsetY: -270,
      rotate: -4,
    },
    {
      src: silentVoice3,
      offsetX: 400,
      offsetY: -70,
      rotate: -2,
    },
  ],
  attackOnTitan: [
    {
      src: attackOnTitan1,
      offsetX: -420,
      offsetY: -110,
      rotate: -5,
    },
    {
      src: attackOnTitan2,
      offsetX: 50,
      offsetY: -200,
      rotate: 4,
    },
    {
      src: attackOnTitan3,
      offsetX: 450,
      offsetY: 20,
      rotate: 10,
    },
  ],
  spiritedAway: [
    {
      src: spiritedAway1,
      offsetX: -500,
      offsetY: -10,
      rotate: -5,
    },
    {
      src: spiritedAway2,
      offsetX: -10,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: spiritedAway3,
      offsetX: 370,
      offsetY: 200,
      rotate: -7,
    },
  ],
  bunnyGirl: [
    {
      src: bunnyGirl1,
      offsetX: -450,
      offsetY: 100,
      rotate: -2,
    },
    {
      src: bunnyGirl2,
      offsetX: -100,
      offsetY: -20,
      rotate: -3,
    },
    {
      src: bunnyGirl3,
      offsetX: 350,
      offsetY: 250,
      rotate: 2,
    },
  ],
};
