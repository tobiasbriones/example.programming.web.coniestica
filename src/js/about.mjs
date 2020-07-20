/*
 * This file is part of example.programming.web.coniestica = Coniestica
 * Copyright (C) 2019 Tobias Briones
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import '../about.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/main.css';
import '../css/about.css';
import NavigationManager from './ui/menu/NavigationManager.mjs';
import { COMPANY_MISSION_CARD_HTML, COMPANY_OBJECTIVES_CARD_HTML, COMPANY_VISION_CARD_HTML } from './values/model.mjs';

const cardsParentEl = document.querySelector('#content > .page > .cards');

const getURLParam = paramName => {
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  return url.searchParams.get(paramName);
};

const getPathName = () => {
  return document.location.pathname;
};

const gotoMission = () => {
  history.pushState(
    {},
    'Coniestica - Misión de la empresa',
    getPathName() + '?v=mission'
  );
  cardsParentEl.innerHTML = COMPANY_MISSION_CARD_HTML;
};

const gotoVision = () => {
  history.pushState(
    {},
    'Coniestica - Visión de la empresa',
    getPathName() + '?v=vision'
  );
  cardsParentEl.innerHTML = COMPANY_VISION_CARD_HTML;
};

const gotoObjectives = () => {
  history.pushState(
    {},
    'Coniestica - Objetivos de la empresa',
    getPathName() + '?v=objectives'
  );
  cardsParentEl.innerHTML = COMPANY_OBJECTIVES_CARD_HTML;
};

// --------------------------------  SCRIPT  -------------------------------- //

const navigationManager = new NavigationManager();
const param = getURLParam('v');

navigationManager.init();
document.getElementById('missionButton').addEventListener('click', gotoMission);
document.getElementById('visionButton').addEventListener('click', gotoVision);
document.getElementById('objectivesButton')
        .addEventListener('click', gotoObjectives);

switch (param) {
  case 'vision':
    gotoVision();
    break;
  
  case 'objectives':
    gotoObjectives();
    break;
  
  default:
    gotoMission();
    break;
}
