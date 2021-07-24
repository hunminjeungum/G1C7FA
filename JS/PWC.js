password = prompt("Student authentication (코드+이름 입력)");

    if(password=='2021107Admin-SYH' or '2021102Admin-LYJ'){

      alert(':) Confirmed that you are a student with permission to view this site.');

    }else{

      if(password=='2021107Betatester-허지원'){

        alert('베타테스터(허지원)의 자격이 확인됨');
  
      }else{
  
        if(password=='2021107Betatester-장유찬'){

          alert('베타테스터(장유찬)의 자격이 확인됨');
    
        }else{
    
          alert(':( You do not have permission to view this site');
          window.location.href='https://hunminjeungum.github.io/G1C2FA/Sub%20HTML/50rry.html';
    
    
        }
  
  
      }


    }
