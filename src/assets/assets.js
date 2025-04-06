import smile from "./smile.jpeg";
import today from "./today's top hit.jpeg";
import global from "./top 50 global.jpeg";
import nigeria from "./top 50 nigeria.jpeg";
import uk from "./top 50 uk.jpeg";
import usa from "./top 50 usa.jpeg";
import atlxs from "./ATLXS - PASSO BEM SOLTO (SLOWED).mp3";
import who from "./who does that.jpeg";
import home_icon from "./home.jpeg";
import search_icon from "./search.jpeg";
import stack_icon from "./stack.jpeg";
import arrow_icon from "./arrow.jpeg";
import plus_icon from "./plus.jpeg";
import shuffle_icon from "./shuffle.jpeg";
import previous_icon from "./previous.jpeg";
import foward_icon from "./foward.jpeg";
import play_icon from "./play.jpeg";
import loop_icon from "./loop.jpeg";
import travis from "./travis.jpeg";
import passo from "./passo bem solto.jpeg";
import fola from "./Fola-Ft-Bella-Shmurda-Who-Does-That-(TrendyBeatz.com).mp3";
import scott from "./Travis-Scott-4X4-(JustNaija.com).mp3";

export const assets = {
  smile,
  today,
  global,
  nigeria,
  uk,
  usa,
  atlxs,
  who,
  home_icon,
  search_icon,
  stack_icon,
  arrow_icon,
  plus_icon,
  shuffle_icon,
  previous_icon,
  foward_icon,
  play_icon,
  loop_icon,
  travis,
  passo,
  fola,
  scott,
};
export const albumsData = [
  {
    id: 0,
    name: "Top 50 United Kingdom",
    image: uk,
    desc: "The top 50 UK songs",
    bgColor: "#FFFF00",
  },

  {
    id: 1,
    name: "Your Playlist",
    image: smile,
    desc: "Your most played tracks",
    bgColor: "#2fcdef",
  },
  {
    id: 2,
    name: "Today's top hit",
    image: today,
    desc: "The most played song today",
    bgColor: "#FF0000",
  },
  {
    id: 3,
    name: "Top 50 global",
    image: global,
    desc: "The top 50 Global songs",
    bgColor: "#000000",
  },
  {
    id: 4,
    name: "Top 50 Nigeria",
    image: nigeria,
    desc: "The top 50 Nigeria songs",
    bgColor: "#FF00FF",
  },

  {
    id: 5,
    name: "Top 50 USA",
    image: usa,
    desc: "The top 50 USA songs",
    bgColor: "#0000FF",
  },
];

export const songsData = [
  {
    id: 0,
    name: "who does that? (feat. Bella shmurda)",
    desc: "FOLA, Bella shmurda",
    image: who,
    duration: "2:40",
    file: fola,
  },
  {
    id: 1,
    name: "passo bem solto",
    desc: "Atlxs",
    image: passo,
    duration: "1:54",
    file: atlxs,
  },
  {
    id: 2,
    name: "4X4",
    desc: "Travis Scott",
    image: travis,
    duration: "3:10",
    file: scott,
  },
];
