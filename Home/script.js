window.onload = function() {
    // Load default content (image) when the page loads
    loadMainContent('<img src="https://cdn.britannica.com/07/192107-050-CE043374/anatomy-charts-human-body-muscle-systems-skeletal.jpg" id="mainImage">');
    resizeImage(); // Call function to resize the image
  
    // Event listener for link1
    document.getElementById('link1').addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default behavior of the link
  
      // Hide the sidebar
      var sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';
  
      // Load content for link1
      loadSidebarContent('');
      loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSddbmanBZraC7Bw3vAI392YhWfhyLOBtsMxq7zHtbdyvkloEYD4h0eS4bF3o0pkqLX1fC9GAvP7ym-/pub?embedded=true" width="100%" height="600px"></iframe>');
    });
  
    // Event listener for link2
    document.getElementById('link2').addEventListener('click', function(e) {
      e.preventDefault();
  
      // Theory Exam #1
      var sidebarContent = '';
      sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
      sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
      sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
      sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
      sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
      sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
      sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
      sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
      sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
      sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
      sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
      sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
      sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
      sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
      sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
      sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
      sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Planes of the Body</a><br>';
      sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
      sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
      sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
      sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
      sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  
      // Load sidebar content
      loadSidebarContent(sidebarContent);
      loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');
  
      // Add event listener for PowerPoints link
      document.getElementById('powerPointsLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the PowerPoints options
        var powerPointsOptions = document.getElementById('powerPointsOptions');
        powerPointsOptions.style.display = 'block';
      });
  
      // Event listener for Handouts link
      document.getElementById('handoutsLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Handouts options
        var handoutsOptions = document.getElementById('handoutsOptions');
        handoutsOptions.style.display = 'block';
      });
  
      // Add event listener for Note Guides link
      document.getElementById('noteGuidesLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Note Guides options
        var noteGuidesOptions = document.getElementById('noteGuidesOptions');
        noteGuidesOptions.style.display = 'block';
      });
  
      // Add event listener for Practice Quizzes
      document.getElementById('practiceQuizzesLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Show the Practice Quizzes options
        var practiceQuizzesOptions = document.getElementById('practiceQuizzesOptions');
        practiceQuizzesOptions.style.display = 'block';
      });
  
      // Add event listeners for Chapter PowerPoints
      document.getElementById('chapter3Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQasClFopnaZ3qSPMDUgcNj3h5iFxIJI-8XZkXOLVccsytUdVPrfTQj9MSoqNl4gg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
  
      document.getElementById('chapter8Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ4mKVqRMZghmt-gd9HUXQ7iau_KIzmft5OjmK9cNS4byIBQBLdVCq9kWKc1Qcaug/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
  
      document.getElementById('chapter7Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSt0gUF7jULT5SEz-1oZkIZ3LRVDC9ed6NNhq64Ryy5RfjjpPHWTwRDLA2DfhZkiQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
  
      document.getElementById('chapter9Link').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT9UgZi5opZST13raOnLqZDBKcZuhHRJJLfGIqePClI74R0b3XWq_MQ6Y7_x-kEpg/embed?start=true&loop=false&delayms=5000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
  
  
  
      // Event Listeners for Handouts
      document.getElementById('massageTerminology').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTNb6pRrRXlvhiBAbX-acrtwu3XSEhy75RH0ygnJobS29fKu84E-szQuaR0SL5bPlZxJATGUwQZrh6f/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('fiveStrokes').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vT1kdsm6jVbwfhaWY1Verf1gyqYHOqH9UgrJFdf1FU_CldFnnDWR0YBJCGsFhHz-w/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('endangermentSites').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTI6Sc00BSkhS7mHx0pAlzMgXXrGCP5WfB40aMTf_gs5MlIqmQfnAGc905YmUtSYGbFVvmCCOl27jpT/pub?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="6000px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
      });
  
  
      // Event listeners for Chapter Note Guides
      document.getElementById('directionalTerms').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQbCEkRYLY83Y0P9DZNTP9tpG9_SXteP5UQO8xdoYBkM157N7vPCjkrQ4lYffMT_m2--ErAr8XxvoUd/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter3Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQVskFFSSDjyl5TuZrcct0I1uLJAcMNYhw7GdIQZJL04GT02lVpkJbKFRgDH7Lw0bdYo5-M7BAYIw27/pub?embedded=true" frameborder="0" width="100%" height="12000px"></iframe>');
      });
  
      document.getElementById('chapter8Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRX11qNZkwFbYZD9AGCwgZvy0qigGZjP5PAfiu7fukwOCzmbYJBT5MpFm2tb_fSZ5Bn9FtdnaJEpReS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter7Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSZ5P3A9FFPaVhCRezVIGvsC7TJVCxcz3rG3iXKXE_KLAWla17ZTqBpJ16KBOxwCejuVWEVOpVs4qJ6/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter9Note').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSWbu2y22BTQOXuh4gwlTQOecu5MzGCgjJJTf9ivHYllNZmC-BBYZiC1ZGnCUDw_T8BLvc1fX4leuxQ/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
  
      // Event listeners for Practice Quizzes
      document.getElementById('directionalTermsPq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRIOnn4_E_5SWYHt977LVbxFLSpJ48BbDDOTa4k_1UHN-_T5emAuNHl78sOw_dCU8bdtHw5LkZ0nT47/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('muscleConceptsPq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQRVfjeHzoY1tj1Lp8W7GVUaS254umftgTxfGvL8Sj8wwNar_WP0i66S6HnCTue0DZwYYVD_HBKNJf5/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter3Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRtSuNgvaKq4SKEvU42tIEBZeMM0CO06K4Mx8mC2xpXx9m2lymoU1WcH1cDzqhRtaLO720iiXsnRHrB/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter8Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTGp-Y62PXPY1FKYpuBKl0K77GIOrovYMV63Io_NmJFisA5oeGhtTjrWX_V1EHADL7G2WNlBNHQUA-b/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter7Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSc0wSFADrfvm3N4fDsdC7fU6_6ytZrU-CwOTBWb0cofXA0y1lk-Al_zmM12OwRAVPG0EbNS6Fxg8YV/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
      document.getElementById('chapter9Pq').addEventListener('click', function(e) {
        e.preventDefault();
        loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRuaYeXTjX0Ie7vCAC58TSDnFqMy_UketfT_kdOcKIRbfjPsyDkcOLNrnq_fNut33B1HrFD4ylQf_bS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
      });
  
    });

 //Theory Exam #2
 document.getElementById('link3').addEventListener('click', function(e) {
    e.preventDefault();

  var sidebarContent = '';
  sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
  sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
  sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
  sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
  sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
  sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
  sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
  sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
  sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';

// Load sidebar content
loadSidebarContent(sidebarContent);
loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');
 

   // Add event listener for PowerPoints link
   document.getElementById('powerPointsLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the PowerPoints options
    var powerPointsOptions = document.getElementById('powerPointsOptions');
    powerPointsOptions.style.display = 'block';
  });

  // Event listener for Handouts link
  document.getElementById('handoutsLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the Handouts options
    var handoutsOptions = document.getElementById('handoutsOptions');
    handoutsOptions.style.display = 'block';
  });

  // Add event listener for Note Guides link
  document.getElementById('noteGuidesLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the Note Guides options
    var noteGuidesOptions = document.getElementById('noteGuidesOptions');
    noteGuidesOptions.style.display = 'block';
  });

  // Add event listener for Practice Quizzes
  document.getElementById('practiceQuizzesLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the Practice Quizzes options
    var practiceQuizzesOptions = document.getElementById('practiceQuizzesOptions');
    practiceQuizzesOptions.style.display = 'block';
  });

  // Add event listeners for Chapter PowerPoints
  document.getElementById('chapter3Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQasClFopnaZ3qSPMDUgcNj3h5iFxIJI-8XZkXOLVccsytUdVPrfTQj9MSoqNl4gg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });

  document.getElementById('chapter8Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ4mKVqRMZghmt-gd9HUXQ7iau_KIzmft5OjmK9cNS4byIBQBLdVCq9kWKc1Qcaug/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });

  document.getElementById('chapter7Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSt0gUF7jULT5SEz-1oZkIZ3LRVDC9ed6NNhq64Ryy5RfjjpPHWTwRDLA2DfhZkiQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });

  document.getElementById('chapter9Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT9UgZi5opZST13raOnLqZDBKcZuhHRJJLfGIqePClI74R0b3XWq_MQ6Y7_x-kEpg/embed?start=true&loop=false&delayms=5000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });



  // Event Listeners for Handouts
  document.getElementById('massageTerminology').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTNb6pRrRXlvhiBAbX-acrtwu3XSEhy75RH0ygnJobS29fKu84E-szQuaR0SL5bPlZxJATGUwQZrh6f/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('fiveStrokes').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vT1kdsm6jVbwfhaWY1Verf1gyqYHOqH9UgrJFdf1FU_CldFnnDWR0YBJCGsFhHz-w/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('endangermentSites').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTI6Sc00BSkhS7mHx0pAlzMgXXrGCP5WfB40aMTf_gs5MlIqmQfnAGc905YmUtSYGbFVvmCCOl27jpT/pub?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="6000px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });


  // Event listeners for Chapter Note Guides
  document.getElementById('directionalTerms').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQbCEkRYLY83Y0P9DZNTP9tpG9_SXteP5UQO8xdoYBkM157N7vPCjkrQ4lYffMT_m2--ErAr8XxvoUd/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter3Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQVskFFSSDjyl5TuZrcct0I1uLJAcMNYhw7GdIQZJL04GT02lVpkJbKFRgDH7Lw0bdYo5-M7BAYIw27/pub?embedded=true" frameborder="0" width="100%" height="12000px"></iframe>');
  });

  document.getElementById('chapter8Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRX11qNZkwFbYZD9AGCwgZvy0qigGZjP5PAfiu7fukwOCzmbYJBT5MpFm2tb_fSZ5Bn9FtdnaJEpReS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter7Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSZ5P3A9FFPaVhCRezVIGvsC7TJVCxcz3rG3iXKXE_KLAWla17ZTqBpJ16KBOxwCejuVWEVOpVs4qJ6/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter9Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSWbu2y22BTQOXuh4gwlTQOecu5MzGCgjJJTf9ivHYllNZmC-BBYZiC1ZGnCUDw_T8BLvc1fX4leuxQ/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });


  // Event listeners for Practice Quizzes
  document.getElementById('directionalTermsPq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRIOnn4_E_5SWYHt977LVbxFLSpJ48BbDDOTa4k_1UHN-_T5emAuNHl78sOw_dCU8bdtHw5LkZ0nT47/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('muscleConceptsPq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQRVfjeHzoY1tj1Lp8W7GVUaS254umftgTxfGvL8Sj8wwNar_WP0i66S6HnCTue0DZwYYVD_HBKNJf5/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter3Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRtSuNgvaKq4SKEvU42tIEBZeMM0CO06K4Mx8mC2xpXx9m2lymoU1WcH1cDzqhRtaLO720iiXsnRHrB/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter8Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTGp-Y62PXPY1FKYpuBKl0K77GIOrovYMV63Io_NmJFisA5oeGhtTjrWX_V1EHADL7G2WNlBNHQUA-b/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter7Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSc0wSFADrfvm3N4fDsdC7fU6_6ytZrU-CwOTBWb0cofXA0y1lk-Al_zmM12OwRAVPG0EbNS6Fxg8YV/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter9Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRuaYeXTjX0Ie7vCAC58TSDnFqMy_UketfT_kdOcKIRbfjPsyDkcOLNrnq_fNut33B1HrFD4ylQf_bS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

 //Theory Exam #2
 document.getElementById('link3').addEventListener('click', function(e) {
    e.preventDefault();

  var sidebarContent = '';
  sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
  sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
  sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
  sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
  sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
  sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
  sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
  sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
  sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';

// Load sidebar content
loadSidebarContent(sidebarContent);
loadMainContent('<img src="https://assets-global.website-files.com/6022b8f7186c4b0f024af3af/64b0605cb1c061c0aee330a6_Blog_MassageTypes.webp" id="mainImage">');
 

   // Add event listener for PowerPoints link
   document.getElementById('powerPointsLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the PowerPoints options
    var powerPointsOptions = document.getElementById('powerPointsOptions');
    powerPointsOptions.style.display = 'block';
  });

  // Event listener for Handouts link
  document.getElementById('handoutsLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the Handouts options
    var handoutsOptions = document.getElementById('handoutsOptions');
    handoutsOptions.style.display = 'block';
  });

  // Add event listener for Note Guides link
  document.getElementById('noteGuidesLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the Note Guides options
    var noteGuidesOptions = document.getElementById('noteGuidesOptions');
    noteGuidesOptions.style.display = 'block';
  });

  // Add event listener for Practice Quizzes
  document.getElementById('practiceQuizzesLink').addEventListener('click', function(e) {
    e.preventDefault();
    // Show the Practice Quizzes options
    var practiceQuizzesOptions = document.getElementById('practiceQuizzesOptions');
    practiceQuizzesOptions.style.display = 'block';
  });

  // Add event listeners for Chapter PowerPoints
  document.getElementById('chapter3Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQasClFopnaZ3qSPMDUgcNj3h5iFxIJI-8XZkXOLVccsytUdVPrfTQj9MSoqNl4gg/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });

  document.getElementById('chapter8Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ4mKVqRMZghmt-gd9HUXQ7iau_KIzmft5OjmK9cNS4byIBQBLdVCq9kWKc1Qcaug/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });

  document.getElementById('chapter7Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSt0gUF7jULT5SEz-1oZkIZ3LRVDC9ed6NNhq64Ryy5RfjjpPHWTwRDLA2DfhZkiQ/embed?start=true&loop=false&delayms=3000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });

  document.getElementById('chapter9Link').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT9UgZi5opZST13raOnLqZDBKcZuhHRJJLfGIqePClI74R0b3XWq_MQ6Y7_x-kEpg/embed?start=true&loop=false&delayms=5000" frameborder="0" width="100%" height="600px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });



  // Event Listeners for Handouts
  document.getElementById('massageTerminology').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTNb6pRrRXlvhiBAbX-acrtwu3XSEhy75RH0ygnJobS29fKu84E-szQuaR0SL5bPlZxJATGUwQZrh6f/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('fiveStrokes').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vT1kdsm6jVbwfhaWY1Verf1gyqYHOqH9UgrJFdf1FU_CldFnnDWR0YBJCGsFhHz-w/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('endangermentSites').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTI6Sc00BSkhS7mHx0pAlzMgXXrGCP5WfB40aMTf_gs5MlIqmQfnAGc905YmUtSYGbFVvmCCOl27jpT/pub?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="6000px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
  });


  // Event listeners for Chapter Note Guides
  document.getElementById('directionalTerms').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQbCEkRYLY83Y0P9DZNTP9tpG9_SXteP5UQO8xdoYBkM157N7vPCjkrQ4lYffMT_m2--ErAr8XxvoUd/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter3Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQVskFFSSDjyl5TuZrcct0I1uLJAcMNYhw7GdIQZJL04GT02lVpkJbKFRgDH7Lw0bdYo5-M7BAYIw27/pub?embedded=true" frameborder="0" width="100%" height="12000px"></iframe>');
  });

  document.getElementById('chapter8Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRX11qNZkwFbYZD9AGCwgZvy0qigGZjP5PAfiu7fukwOCzmbYJBT5MpFm2tb_fSZ5Bn9FtdnaJEpReS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter7Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSZ5P3A9FFPaVhCRezVIGvsC7TJVCxcz3rG3iXKXE_KLAWla17ZTqBpJ16KBOxwCejuVWEVOpVs4qJ6/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter9Note').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSWbu2y22BTQOXuh4gwlTQOecu5MzGCgjJJTf9ivHYllNZmC-BBYZiC1ZGnCUDw_T8BLvc1fX4leuxQ/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });


  // Event listeners for Practice Quizzes
  document.getElementById('directionalTermsPq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRIOnn4_E_5SWYHt977LVbxFLSpJ48BbDDOTa4k_1UHN-_T5emAuNHl78sOw_dCU8bdtHw5LkZ0nT47/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('muscleConceptsPq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vQRVfjeHzoY1tj1Lp8W7GVUaS254umftgTxfGvL8Sj8wwNar_WP0i66S6HnCTue0DZwYYVD_HBKNJf5/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter3Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRtSuNgvaKq4SKEvU42tIEBZeMM0CO06K4Mx8mC2xpXx9m2lymoU1WcH1cDzqhRtaLO720iiXsnRHrB/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter8Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vTGp-Y62PXPY1FKYpuBKl0K77GIOrovYMV63Io_NmJFisA5oeGhtTjrWX_V1EHADL7G2WNlBNHQUA-b/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter7Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vSc0wSFADrfvm3N4fDsdC7fU6_6ytZrU-CwOTBWb0cofXA0y1lk-Al_zmM12OwRAVPG0EbNS6Fxg8YV/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });

  document.getElementById('chapter9Pq').addEventListener('click', function(e) {
    e.preventDefault();
    loadMainContent('<iframe src="https://docs.google.com/document/d/e/2PACX-1vRuaYeXTjX0Ie7vCAC58TSDnFqMy_UketfT_kdOcKIRbfjPsyDkcOLNrnq_fNut33B1HrFD4ylQf_bS/pub?embedded=true" frameborder="0" width="100%" height="6000px"></iframe>');
  });



//Theory Exam #2
  document.getElementById('link3').addEventListener('click', function(e) {
    e.preventDefault();
    loadSidebarContent('<p>Sidebar Content for Link 4</p>');
    loadMainContent('<p>Main Content for Link 4</p>');
  });

  var sidebarContent = '';
  sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
  sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
  sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
  sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
  sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
  sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
  sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
  sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
  sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';



//Theory Exam #3
  document.getElementById('link4').addEventListener('click', function(e) {
    e.preventDefault();
    loadSidebarContent('<p>Sidebar Content for Link 4</p>');
    loadMainContent('<p>Main Content for Link 4</p>');
  });

  var sidebarContent = '';
  sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
  sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
  sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
  sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
  sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
  sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
  sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
  sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
  sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';

  //Theory Exam #4
  document.getElementById('link5').addEventListener('click', function(e) {
    e.preventDefault();
    loadSidebarContent('<p>Sidebar Content for Link 5</p>');
    loadMainContent('<p>Main Content for Link 5</p>');
  });

  var sidebarContent = '';
  sidebarContent += '<h2 id="powerPointsLink">PowerPoints</h2>';
  sidebarContent += '<a href="#" id="chapter3Link">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Link">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Link">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Link">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="handoutsLink">Handouts</h2>';
  sidebarContent += '<a href="#" id="massageTerminology">Massage Terminology</a><br>';
  sidebarContent += '<a href="#" id="fiveStrokes">The Five Basic Strokes</a><br>';
  sidebarContent += '<a href="#" id="endangermentSites">Endangerment Sites</a><br>';
  sidebarContent += '<h2 id="noteGuidesLink">Note Guides</h2><br>';
  sidebarContent += '<a href="#" id="directionalTerms">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="chapter3Note">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Note">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Note">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Note">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';
  sidebarContent += '<h2 id="practiceQuizzesLink">Practice Quizzes</h2>';
  sidebarContent += '<a href="#" id="directionalTermsPq">Directional Terms, Body Movements, and Planes of the Body</a><br>';
  sidebarContent += '<a href="#" id="muscleConceptsPq">Muscle Concepts</a><br>';
  sidebarContent += '<a href="#" id="chapter3Pq">Chapter 3: Tools of the Trade</a><br>';
  sidebarContent += '<a href="#" id="chapter8Pq">Chapter 8: Massage Techniques</a><br>';
  sidebarContent += '<a href="#" id="chapter7Pq">Chapter 7: Body Mechanics, Client Positioning, and Draping</a><br>';
  sidebarContent += '<a href="#" id="chapter9Pq">Chapter 9: Standard Precautions, Contraindications, and Emergency Preparedness</a><br>';





     
      //Modalities
      document.getElementById('link6').addEventListener('click', function(e) {
        e.preventDefault();
        loadSidebarContent('<p>Sidebar Content for Link 6</p>');
        loadMainContent('<p>Main Content for Link 6</p>');
      });


      //Medical Massage
      document.getElementById('link7').addEventListener('click', function(e) {
        e.preventDefault();
        loadSidebarContent('<p>Sidebar Content for Link 7</p>');
        loadMainContent('<p>Main Content for Link 7</p>');
      });


      //Business Section
      document.getElementById('link8').addEventListener('click', function(e) {
        e.preventDefault();
        loadSidebarContent('<p>Sidebar Content for Link 8</p>');
        loadMainContent('<p>Main Content for Link 8</p>');
      });


      //Massage Routine
      document.getElementById('link9').addEventListener('click', function(e) {
        e.preventDefault();
        loadSidebarContent('<p>Sidebar Content for Link 9</p>');
        loadMainContent('<p>Main Content for Link 9</p>');
      });


      //Muscles
      document.getElementById('link10').addEventListener('click', function(e) {
        e.preventDefault();
        loadSidebarContent('<p>Sidebar Content for Link 10</p>');
        loadMainContent('<p>Main Content for Link 10</p>');
      });
    });
  
    // Function to resize the image
    function resizeImage() {
      var img = document.getElementById('mainImage');
      img.style.width = 'auto'; // Set width of the image
      img.style.height = 'auto'; // Maintain aspect ratio
    }
  
    // Function to load content into sidebar
    function loadSidebarContent(content) {
      var sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'block'; // Show the sidebar
      sidebar.innerHTML = content;
    }
  
    // Function to load content into main content
    function loadMainContent(content) {
      document.querySelector('.content').innerHTML = content;
    }
  });