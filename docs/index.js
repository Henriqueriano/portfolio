const rolar = () => 
    {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            window.scrollTo({
                top: 650,
                behavior: "smooth",
              });
        else 
            window.scrollTo({
                top: 770,
                behavior: "smooth",
            });
    };