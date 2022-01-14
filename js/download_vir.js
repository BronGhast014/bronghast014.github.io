var assetVersion = document.getElementById("resource-version");
var soundVersion = document.getElementById("sound-version");

function onAssetsVersion() {

    switch (assetVersion.options[assetVersion.selectedIndex].value) {
        case "1.18":
            document.getElementById("download-assets").href = "https://github.com/BronGhast014/bronghast014.github.io/raw/main/src/files/1.18.assets.zip";
            break;
        case "1.17":
            document.getElementById("download-assets").href = "https://github.com/BronGhast014/bronghast014.github.io/raw/main/src/files/1.17.assets.zip";
            break;
        case "1.16":
            document.getElementById("download-assets").href = "https://github.com/BronGhast014/bronghast014.github.io/raw/main/src/files/1.16.assets.zip";
            break;
        case "1.15":
            document.getElementById("download-assets").href = "https://github.com/BronGhast014/bronghast014.github.io/raw/main/src/files/1.15.assets.zip";
            break;
        case "1.14":
            document.getElementById("download-assets").href = "https://github.com/BronGhast014/bronghast014.github.io/raw/main/src/files/1.14.assets.zip";
            break;
        case "1.13":
            document.getElementById("download-assets").href = "https://github.com/BronGhast014/bronghast014.github.io/raw/main/src/files/1.13.assets.zip";
            break;
    }
}

function onSoundsVersion() {

    switch (soundVersion.options[soundVersion.selectedIndex].value) {
        case "1.18":
            document.getElementById("download-sounds").href = "https://www.mediafire.com/file/az6pfdhk12dzm1j/1.18.sounds.zip/file";
            break;
        case "1.17":
            document.getElementById("download-sounds").href = "https://www.mediafire.com/file/fsjlns6vulu7nlu/1.17.sounds.zip/file";
            break;
        case "1.16":
            document.getElementById("download-sounds").href = "https://www.mediafire.com/file/8vk7pgkysflzj14/1.16_sounds.zip/file";
            break;
        case "1.15":
            document.getElementById("download-sounds").href = "https://www.mediafire.com/file/m179idm6xgkmbzb/1.15_sounds.zip/file";
            break;
        case "1.14":
            document.getElementById("download-sounds").href = "https://www.mediafire.com/file/4eev0tlq9nz66c6/minecraft_1.14_sound_pack.zip/file";
            break;
        case "1.13":
            document.getElementById("download-sounds").href = "https://www.mediafire.com/file/84vmujbeqpzeatk/minecraft_1.13_sound_pack.zip/file";
            break;
    }

}