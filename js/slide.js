$(document).ready(() => {

    const tatsumaki = {
        heroName: "Classe #2 - Senritsu no Tatsumaki (Tornado do Terror)",
        rgb: `rgb(17, 172, 69`,
        opacity: `1`,
        descriptionContent: `É a mulher mais poderosa da Associação de Heróis. Dona de uma personalidade bastante forte, Tatsumaki está quase sempre de mau humor.
        A Tornado tem poderes paranormais telecinéticos e consegue executar ataques psíquicos incríveis! 
        Ela ainda consegue criar barreiras de energia e controlar o chi (a "força da vida").`,
        heroBackground: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.6) 100%), url(./img/tatsumaki.jpg)`
    }

    const bang = {
        heroName: "Classe S #3 - Silver Fang (Bang)",
        rgb: `rgb(177, 177, 177`,
        opacity: `1`,
        descriptionContent: `Também conhecido por Bang, este herói tem uma força física incrível, apesar da sua idade avançada em comparação aos outros (tem mais de 80 anos).
        Além disso, Fang desenvolveu o seu sexto sentido, sendo capaz de atacar ou se defender mesmo sem o uso da visão, audição e olfato, por exemplo.`,
        heroBackground: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.6) 100%), url(./img/bang.png)`
    }

    const atomicSamurai = {
        heroName: "Classe S #4 - Atomic Samurai",
        rgb: `rgb(230, 32, 3`,
        opacity: `1`,
        descriptionContent: `Também chamado de Kamikaze, este formidável espadachim é um dos heróis mais orgulhosos da Associação. 
        Este super-herói é um mestre com a espada, sendo que o seu estilo de luta se baseia no uso desta arma.`,
        heroBackground: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.6) 100%), url(./img/atomic-samurai.jpg)`
    }

    const heroList = [tatsumaki, bang, atomicSamurai];
    let currentHero = 0;

    const makeRanking = (heroInformations) => {
        const descriptionHtml = `<p class="description__content c--white">${heroInformations.descriptionContent} </p>`

        $("#ranking").css("background", heroInformations.heroBackground);
        $("#ranking").css("background-size", "cover");
        $("#ranking").css("border-top", `5px solid ${heroInformations.rgb})`)
        $("#ranking").css("border-bottom", `5px solid ${heroInformations.rgb})`)
        $("#ranking").css("background-position-x", `center`)

        $(".ranking__position").text(heroInformations.heroName);
        $(".ranking__description").append(descriptionHtml);
        $(".description__content").css("background-color", `${heroInformations.rgb}, ${heroInformations.opacity})`)
        $(".description__content").css("box-shadow", `1px 1px 12px -3px ${heroInformations.rgb})`)
    }

    makeRanking(heroList[currentHero]);

    $(".ranking__arrowright").click(() => {
        $("#ranking").fadeOut("slow", () => {
            $(".description__content").remove();
            
            if (currentHero < heroList.length - 1) { currentHero++ };
            
            makeRanking(heroList[currentHero]);
        });
        $("#ranking").fadeIn("slow");
    })

    $(".ranking__arrowleft").click(() => {
        $("#ranking").fadeOut("slow", () => {
            $(".description__content").remove();
            
            if (currentHero > 0) { currentHero-- };
            
            makeRanking(heroList[currentHero]);
        });
        $("#ranking").fadeIn("slow");
    })
})