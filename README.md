<img src="assets/Logo.jpg" alt="PendoluHelper" width="320" height="320" />
<p>Co-Pilot is a discord Bot designed to be the all-in-one, open-source Discord bot that handles all your server needs.</p>





<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000&style=for-the-badge&logo=github?label=healthinesses" />
  <a href="https://github.com/SlaughterBlade/Co-Pilot/blob/main/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge&logo=github?label=healthinesses" />
  </a>
  <a href="https://github.com/SlaughterBlade/Co-Pilot/blob/main/LICENSE" target="_blank">
    <img alt="License:" src="https://img.shields.io/github/license/SlaughterBlade/Co-Pilot?style=for-the-badge&logo=github?label=healthinesses" />
  </a>
  <a href="https://github.com/SlaughterBlade/Co-Pilot/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/SlaughterBlade/Co-Pilot?style=for-the-badge&logo=github?label=healthinesses" />
  </a>
  <a href="https://github.com/SlaughterBlade/Co-Pilot/pulls">
    <img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/SlaughterBlade/Co-Pilot?style=for-the-badge&logo=github?label=healthinesses" />
  </a>
  <a href="https://github.com/SlaughterBlade/Co-Pilot">
    <img alt="Size" src="https://img.shields.io/github/languages/code-size/SlaughterBlade/Co-Pilot?style=for-the-badge&logo=github?label=healthinesses" />
  </a>
   <a href="https://github.com/SlaughterBlade/Co-Pilot">
    <img alt="Stars" src="https://img.shields.io/github/stars/SlaughterBlade/Co-Pilot?style=for-the-badge&logo=github?label=healthinesses" />
  </a>
   <a href="https://discord.gg/Vt7J4NNe7h">
    <img alt="Support Server Link" src="https://img.shields.io/discord/946488927865417759.svg?label=Discord&logo=Discord&colorB=7289da&style=for-the-badge" />
   </a>
</p>
<h2 align="center">Welcome to PendoluHelper Bot repo! 👋</h2>

**🤖 Co-Pilot (All-in-one Discord Bot)**<br>
 [**Co-Pilot**](https://github.com/SlaughterBlade/Co-Pilot) is a discord Bot designed to be the all-in-one, open-source Discord bot that handles all your server needs.

## Table of content

* [To-Do](#📝-to-do)
* [Requirements](#requirements)
* [Getting Started](#🚀-getting-started)
* [Configuration](#⚙️-configuration)
* [Current Features & Commands](#📝-current-features--commands)
* [Locales](#🌎-locales)
* [Contributing](#🤝-contributing)
* [Support me](#support-me)
* [Credits](#📝-credits)
* [License](#license)
* [Contributors](#Contributors-✨)

### 📝 To-Do

<ol>

  <li>
- [x] Playing music</Li>
  <li>
- [ ] Moderation</li>
  <li>
- [ ] AutoMod</li>
  <li>
- [ ] Welcomer</li>
  <li>
- [ ] Logs</li>
  <li>
- [ ] Embed Messages</li>
  <li>
- [ ] Reaction Roles</li>
  <li>
- [ ] Auto Message</li>
  <li>
- [ ] Auto Responder</li>
  <li>
- [ ] Leveling System for Text and VC</li>
  <li>
- [ ] Custom Commands</li>
  <li>
- [ ] Statics Counter</li>
  <li>
- [ ] Temporary Channels</li>
  <li>
- [ ] Birthday Reminder</li>
  <li>
- [ ] Support-Ticket System</li>
  <li>
- [ ] Stream alerts</li>
  <li>
- [ ] Game Patch
  <li>
- [x] Voice Activity
</li>
</ol>

## Requirements

- [`Node v16+`](https://nodejs.org)
- [`NPM`](https://www.npmjs.com)
- [`FFMPEG`](https://www.ffmpeg.org)

## 🚀 Getting Started

### Invite PendoluHelper
- [`Co-Pilot V1`](https://discord.com/api/oauth2/authorize?client_id=951083742447931392&permissions=8&scope=bot%20applications.commands)
 
### Deploy or Run Locally

```sh
git clone https://github.com/SlaughterBlade/Co-Pilot.git
cd Co-Pilot
npm install
```
To Start Locally

```sh
npm run start
```

To Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/SlaughterBlade/Co-Pilot)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

[![Run on Repl.it](https://repl.it/badge/github/SlaughterBlade/Co-Pilot)](https://repl.it/github/SlaughterBlade/Co-Pilot)

## ⚙️ Configuration

Copy or Rename `.env.example` to `.env` and fill out the values:

**⚠️ Note: Never commit or share your token or api keys publicly ⚠️**

`config.js` Template

```js
module.exports = {
prefix: '!',
botToken: '',
clientId: '',
geniusApiToken: '', 

webplayer: '',
cors: '*'
}


```

## 📝 Current Features & Commands

All the commands are reigestered as slash "/" commands ,and the default prefix is "!".

### General Commands

- `help` -> Displays all server commands.
- `links` -> Displays associated links.
- `ping` -> Shows the ping of the bot.
- `testslash` -> Register slash commands for the server.

### 🔊 Music Playback Commands

- `clear` -> Clears the server queue.
- `disconnect` -> Disconnects from the music channel and clears the server queue.
- `filter` -> View and set audio filters.
- `grab` -> Sends a private message to you with information about the current playing song.
- `insert` -> Inserts the song specified to the next position in the queue.
- `loop` -> Loops the server queue.
- `lyrics` -> Displays the lyrics of the current or specified song.
- `move` -> Moves a song to a different position in the queue.
- `nowplaying` -> Displays information about the song currently playing.
- `pause` -> Pauses the queue.
- `play` -> Plays the song specified.
- `previous` -> Plays the previous track.
- `queue` -> Displays the server queue.
- `remove` -> Removes a song from the queue.
- `resume` -> Resumes the queue if it is paused.
- `search` -> Searches for a song.
- `seek` -> Clears the server queue.
- `shuffle` -> Shuffles the server queue.
- `skip` -> Skips to the next song in the queue.
- `volume` -> Adjusts the bot volume.

### Voice Activity

- `together` -> Discord Together!.

#### Stable versions
| Application name | Boost level | Max participants |
| --- | --- | --- |
| Watch Together | 0 | Unlimited |
| Poker Night | 1 |25 |
| Betrayal.io | 0 | Unlimited |
| Fishington.io | 0 | Unlimited |
| Chess In The Park | 1 | Unlimited |
| Sketchy Artist | 0 | 12 |
| Awkword | 0 | 12 |
| Doodle Crew | 0 | 16 |
| Sketch Heads | 0 | 16 |
| Letter League | 1 | 8 |
| Word Snacks | 0 | 8 |
| SpellCast | 1 | 100 |
| Checkers In The Park | 1 | Unlimited |
| Blazing 8s | 1 | 8 |
| Putt Party | 0 | Unlimited |

#### Development versions
| Application name | Boost level | Max participants |
| --- | --- | --- |
| PN Dev | 0 | 25 |
| Watch Together Dev | 0 | Unlimited |
| Doodle Crew Dev | 0 | 16 |
| Word Snacks Dev | 0 | 32 |
| Sketchy Artist Dev | 0 | 12 |
| Decoders Dev | 0 | 32 |
| CG 2 Dev | 0 | Unlimited |
| CG 3 Dev(Also known as checkers in the park) | 0 | Unlimited |
| CG4 Dev | 0 | 8 |
| Putt Party Dev | 0 | Unlimited |


## 🌎 Locales

None Yet

## 🤝 Contributing

You are welcome to contribute

1. [Fork the repository](https://github.com/SlaughterBlade/Co-Pilot/fork)
2. Clone your fork: `git clone https://github.com/your-username/Co-Pilot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Stage changes `git add .`
5. Commit your changes: `cz` OR `npm run commit` do not use `git commit`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request

## Support me

<a href="https://www.buymeacoffee.com/ymafalha" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## 📝 Credits

The Amazing music commands from [Dodong Repo](https://github.com/nizeic/Dodong).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Nishant1500"><img src="https://avatars.githubusercontent.com/u/53296643?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nishant1500</b></sub></a><br /><a href="https://github.com/SlaughterBlade/Co-Pilot/commits?author=Nishant1500" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

Made with ❤️ and JavaScript!
