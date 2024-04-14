import {
  mdiAirFilter,
  mdiFlashOutline,
  mdiTableFurniture,
  mdiTournament,
  mdiWaterOutline,
} from '@mdi/js';

export const sections = [
  { category: "moebel", name: "Möbelbereich", icon: mdiTableFurniture },
  {
    category: "halterung",
    name: "Halterungsbereich",
    icon: mdiTournament,
  },
  { category: "wasser", name: "Wasserbereich", icon: mdiWaterOutline },
  { category: "lueftung", name: "Lüftungsbereich", icon: mdiAirFilter },
  { category: "elektro", name: "Elektrobereich", icon: mdiFlashOutline },
];
