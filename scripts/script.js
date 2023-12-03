let giftIndex = 0;

function resetForm(e){
  if(e){
    e.preventDefault();
  };
  document.getElementById("order-form").reset();
  if(giftIndex){
    giftIndex = 0;
  };
};

window.addEventListener('DOMContentLoaded', (event) => {

    function updateGiftIndex() {
      giftIndex = 0;
      document.querySelectorAll('.gift_description_input').forEach(input => {
        if (input.value.length > 0) {
          giftIndex++;
        }
      });
      console.log('Number of filled gifts:', giftIndex); // for debugging
    }

    document.querySelectorAll('.gift_description_input').forEach(input => {
      input.addEventListener('input', updateGiftIndex);
    });


    document.querySelectorAll('input[id^="gift_"][id$="_paper"]').forEach(function(input) {
      // Apply your logic here
      // For example, to convert input to uppercase:
      input.addEventListener('input', function() {
          this.value = this.value.toUpperCase();
      });
    });
  

    document.getElementById('current-year').textContent = new Date().getFullYear();
  });
function print(e)
    {
      e.preventDefault();

      // Reference to the button
      const button = e.target;

        // Check if giftIndex is greater than 0
      if (giftIndex > 0) {
          // Disable the button and change text to "Printing..."
          button.disabled = true;
          button.value = 'Printing...';

          // Set a timeout to re-enable the button and reset text after 9 seconds
          setTimeout(function() {
              button.disabled = false;
              button.value = 'Print';
          }, 9000);
      } else {
          // If giftIndex is 0 or less, alert the user
          alert("No gifts have been entered. Please enter at least one gift to print.");
          return;
      }
      let currentDate = new Date();
      let prettyDate = currentDate.toDateString();
      let prettyTime = currentDate.toLocaleTimeString('en-US');
      var first = document.getElementById("first").value;
	    var last = document.getElementById("last").value;
	    var phone = document.getElementById("phone").value;
	    var cubby = document.getElementById("cubby").value;
	    var initials = document.getElementById("initials").value;
      var ip_addr = document.getElementById("ip_addr").value;
      var output = document.getElementById("output");
      let gift_1_description = document.getElementById("gift_1_description").value;
      let gift_2_description = document.getElementById("gift_2_description").value;
      let gift_3_description = document.getElementById("gift_3_description").value;
      let gift_4_description = document.getElementById("gift_4_description").value;
      let gift_5_description = document.getElementById("gift_5_description").value;
      let gift_6_description = document.getElementById("gift_6_description").value;
      let gift_7_description = document.getElementById("gift_7_description").value;
      let gift_8_description = document.getElementById("gift_8_description").value;
      let gift_9_description = document.getElementById("gift_9_description").value;
      let gift_10_description = document.getElementById("gift_10_description").value;
      let gift_11_description = document.getElementById("gift_11_description").value;
      let gift_1_recipient = document.getElementById("gift_1_recipient").value;
      let gift_2_recipient = document.getElementById("gift_2_recipient").value;
      let gift_3_recipient = document.getElementById("gift_3_recipient").value;
      let gift_4_recipient = document.getElementById("gift_4_recipient").value;
      let gift_5_recipient = document.getElementById("gift_5_recipient").value;
      let gift_6_recipient = document.getElementById("gift_6_recipient").value;
      let gift_7_recipient = document.getElementById("gift_7_recipient").value;
      let gift_8_recipient = document.getElementById("gift_8_recipient").value;
      let gift_9_recipient = document.getElementById("gift_9_recipient").value;
      let gift_10_recipient = document.getElementById("gift_10_recipient").value;
      let gift_11_recipient = document.getElementById("gift_11_recipient").value;
      let gift_1_paper = document.getElementById("gift_1_paper").value;
      let gift_2_paper = document.getElementById("gift_2_paper").value;
      let gift_3_paper = document.getElementById("gift_3_paper").value;
      let gift_4_paper = document.getElementById("gift_4_paper").value;
      let gift_5_paper = document.getElementById("gift_5_paper").value;
      let gift_6_paper = document.getElementById("gift_6_paper").value;
      let gift_7_paper = document.getElementById("gift_7_paper").value;
      let gift_8_paper = document.getElementById("gift_8_paper").value;
      let gift_9_paper = document.getElementById("gift_9_paper").value;
      let gift_10_paper = document.getElementById("gift_10_paper").value;
      let gift_11_paper = document.getElementById("gift_11_paper").value;
	    var zplMain = `
                  ^PW812
                  ^LL1827

                  ^FX Grid Shapes
                  ^FX Outer Box
                  ^FO50,50^GB700,1600,3^FS
                  ^FX Vertical Line 1
                  ^FO250,50^GB3,250,3^FS
                  ^FX Vertical Line 2
                  ^FO550,50^GB3,250,3^FS
                  ^FX Vertical Line 3
                  ^FO400,300^GB3,50,3^FS
                  ^FX Vertical Line 4
                  ^FO400,415^GB3,65,3^FS
                  ^FX Vertical Line 4 who for left
                  ^FO400,480^GB3,1170,3^FS
                  ^FX Vertical Line 5 who for right
                  ^FO630,480^GB3,1170,3^FS
                  ^FX Horizontal Line 1
                  ^FO50,100^GB700,3,3^FS
                  ^FX Horizontal Line 2
                  ^FO50,300^GB700,3,3^FS
                  ^FX Horizontal Line 3
                  ^FO50,350^GB700,3,8^FS
                  ^FX Horizontal Line 4
                  ^FO50,415^GB700,3,3^FS
                  ^FX Horizontal Line 5
                  ^FO50,480^GB700,3,8^FS
                  ^FX Horizontal Line 6
                  ^FO50,550^GB700,3,3^FS
                  ^FX Horizontal Line 7
                  ^FO50,650^GB700,3,3^FS
                  ^FX Horizontal Line 8
                  ^FO50,750^GB700,3,3^FS
                  ^FX Horizontal Line 9
                  ^FO50,850^GB700,3,3^FS
                  ^FX Horizontal Line 10
                  ^FO50,950^GB700,3,3^FS
                  ^FX Horizontal Line 11
                  ^FO50,1050^GB700,3,3^FS
                  ^FX Horizontal Line 12
                  ^FO50,1150^GB700,3,3^FS
                  ^FX Horizontal Line 13
                  ^FO50,1250^GB700,3,3^FS
                  ^FX Horizontal Line 14
                  ^FO50,1350^GB700,3,3^FS
                  ^FX Horizontal Line 15
                  ^FO50,1450^GB700,3,3^FS
                  ^FX Horizontal Line 15
                  ^FO50,1550^GB700,3,3^FS


                  ^CF0,40
                  ^FX Text content and position for cubby number header
                  ^FO80,60^FDCubby #^FS
                  ^FX Text content and position for order taker header
                  ^FO300,60^FDOrder Taker^FS
                  ^FX Text content and position for gifts header
                  ^FO600,60^FDGifts^FS

                  ^FX Set Text Size for cubbie box text
                  ^CF0,90
                  ^FX Text content and position for cubby number
                  ^FO70,150^FD${cubby}^FS
                  ^FX Set Text Size for order taker text
                  ^CF0,180
                  ^FX Text content and position for order taker
                  ^FO300,150^FD${initials}^FS
                  ^FX Set Text Size for gifts number text
                  ^CF0,180
                  ^FX Text content and position gifts number
                  ^FO570,150^FD${giftIndex}^FS

                  ^FX Set Text Size for Date and Time
                  ^CF0,30
                  ^FX Text content and position for date
                  ^FO80,315^FDDate: ${prettyDate}^FS
                  ^FX Text content and position for time
                  ^FO420,315^FDTime: ${prettyTime}^FS

                  ^FX Set Text Size for Customer Info heading
                  ^CF0,40
                  ^FX Text content and position for customer info heading
                  ^FO225,370^FDCustomer Information^FS

                  ^FX Set Text Size for Customer Info
                  ^CF0,30
                  ^FX Text content and position for customer name
                  ^FO80,440^FDName: ${first} ${last}^FS
                  ^FX Text content and position for customer phone
                  ^FO420,440^FDPhone: ${phone}^FS

                  ^FX Set Text Size for Gift Info Heading
                  ^CF0,30
                  ^FX Text content and position for gift info heading
                  ^FO80,510^FDGift Description^FS
                  ^FX Text content and position for recipient heading
                  ^FO420,510^FDWho For^FS
                  ^FX Text content and position for paper heading
                  ^FO650,510^FDPaper^FS

                  ^FX Set Text Size for Gift Rows
                  ^CF0,30
                  ^FX Text content and position for gift row 1
                  ^FB300,2,0,L^FT80,625^FD${gift_1_description}^FS
                  ^FX Text content and position for gift row 2
                  ^FB300,2,0,L^FT80,725^FD${gift_2_description}^FS
                  ^FX Text content and position for gift row 3
                  ^FB300,2,0,L^FT80,825^FD${gift_3_description}^FS
                  ^FX Text content and position for gift row 4
                  ^FB300,2,0,L^FT80,925^FD${gift_4_description}^FS
                  ^FX Text content and position for gift row 5
                  ^FB300,2,0,L^FT80,1025^FD${gift_5_description}^FS
                  ^FX Text content and position for gift row 6
                  ^FB300,2,0,L^FT80,1125^FD${gift_6_description}^FS
                  ^FX Text content and position for gift row 7
                  ^FB300,2,0,L^FT80,1225^FD${gift_7_description}^FS
                  ^FX Text content and position for gift row 8
                  ^FB300,2,0,L^FT80,1325^FD${gift_8_description}^FS
                  ^FX Text content and position for gift row 9
                  ^FB300,2,0,L^FT80,1425^FD${gift_9_description}^FS
                  ^FX Text content and position for gift row 10
                  ^FB300,2,0,L^FT80,1525^FD${gift_10_description}^FS
                  ^FX Text content and position for gift row 11
                  ^FB300,2,0,L^FT80,1625^FD${gift_11_description}^FS

                  ^FX Set Text Size for Recipient rows
                  ^CF0,30
                  ^FX Text content and position for Recipient row 1
                  ^FB150,2,0,L^FT420,625^FD${gift_1_recipient}^FS
                  ^FX Text content and position for Recipient row 2
                  ^FB150,2,0,L^FT420,725^FD${gift_2_recipient}^FS
                  ^FX Text content and position for Recipient row 3
                  ^FB150,2,0,L^FT420,825^FD${gift_3_recipient}^FS
                  ^FX Text content and position for Recipient row 4
                  ^FB150,2,0,L^FT420,925^FD${gift_4_recipient}^FS
                  ^FX Text content and position for Recipient row 5
                  ^FB150,2,0,L^FT420,1025^FD${gift_5_recipient}^FS
                  ^FX Text content and position for Recipient row 6
                  ^FB150,2,0,L^FT420,1125^FD${gift_6_recipient}^FS
                  ^FX Text content and position for Recipient row 7
                  ^FB150,2,0,L^FT420,1225^FD${gift_7_recipient}^FS
                  ^FX Text content and position for Recipient row 8
                  ^FB150,2,0,L^FT420,1325^FD${gift_8_recipient}^FS
                  ^FX Text content and position for Recipient row 9
                  ^FB150,2,0,L^FT420,1425^FD${gift_9_recipient}^FS
                  ^FX Text content and position for Recipient row 10
                  ^FB150,2,0,L^FT420,1525^FD${gift_10_recipient}^FS
                  ^FX Text content and position for Recipient row 11
                  ^FB150,2,0,L^FT420,1625^FD${gift_11_recipient}^FS

                  ^FX Set Text Size paper rows
                  ^CF0,90
                  ^FX Text content and position for paper row 1
                  ^FO650,570^FD${gift_1_paper}^FS
                  ^FX Text content and position for paper row 2
                  ^FO650,670^FD${gift_2_paper}^FS
                  ^FX Text content and position for paper row 3
                  ^FO650,770^FD${gift_3_paper}^FS
                  ^FX Text content and position for paper row 4
                  ^FO650,870^FD${gift_4_paper}^FS
                  ^FX Text content and position for paper row 5
                  ^FO650,970^FD${gift_5_paper}^FS
                  ^FX Text content and position for paper row 6
                  ^FO650,1070^FD${gift_6_paper}^FS
                  ^FX Text content and position for paper row 7
                  ^FO650,1170^FD${gift_7_paper}^FS
                  ^FX Text content and position for paper row 8
                  ^FO650,1270^FD${gift_8_paper}^FS
                  ^FX Text content and position for paper row 9
                  ^FO650,1370^FD${gift_9_paper}^FS
                  ^FX Text content and position for paper row 10
                  ^FO650,1470^FD${gift_10_paper}^FS
                  ^FX Text content and position for paper row 11
                  ^FO650,1570^FD${gift_11_paper}^FS

                  ^FX Set Text Size disclaimer
                  ^CF0,20
                  ^FB680,2,0,L^FT80,1800^FDYou will receive text messages or emails from Bayside Church. Message & data rates may apply. Messages frequency varies. Reply STOP to stop, HELP for help. ^FS

                  `; 
      var zplCustomerCopyText = `
                  ^FWR
                  ^FX Text size, content and position for customer copy
                  ^CF10,40
                  ^FO5,100^FDCustomer Copy^FS
                  ^FO5,700^FDCustomer Copy^FS
                  ^FO5,1200^FDCustomer Copy^FS
                  ^FWN

                  ^FO300,1675^GFA,1728,1728,24,P0F,O07FC,N01FFE,N07IF,M01JF,M03FE3F8,M0FF81F8,L01FE01F8,L03FC01F8gK06,L07F001F8gK0F,L0FE001F8gJ03F8,003C01FC003FgK07F8,007E03F8003FgK0FF8,007F07FI07EgJ01FF8,003F8FEI07EgJ03EF,001F9FCI0FCgJ03DF,I0IF8001FCgJ079F,I0IFI03F8g06I0F3E,I0FFEI07Fg01EI0F3C,I0FFCI0FEP03O03E001E7C,I0FF8001FCP078N07C003EF8,I0FFI03F8K0FJ078N0FC003CF8,I0FEI07FJ01FFCI078N0780079F,I0FC003FEJ0IFEI0F8J03F003I07FE,I0FC03FFCI0JFEI0F8I03FFL07FC,001F81IFC007JFC001F8001IFK07FFC,003F87IFE03JFDC003FI07IF1I03IF81F8,003F8KF1KF3E00FE001IFE7C00JF07FC,007F1FFE3LFC7E01FE1F7FF8CFC01IFE1FFC,00FF1FFC1LF8FE03FC3JF03FC07FBFC3FFC,00FF1FF01IFC7E1FC0FF87JF0FFC0FF3F87CF8,01FF07803FFE0FC3F81FF07FF1F3FFC1FC7F0F9F8,01FFJ0IF81F87F07FF0FF80FFEF87F8FE1F3F,03FEI03IF01F9FF1FFE3FE00FFCF9FF1FE1E7E03F003C,07FEI07IF01FBFF7FFCFFC00FE0JF3FE3FFC3KFE,07FE001FF1F03KFE7IFC03FC1PF1LFC,0FFC007FC1F03KFC7IFC0FFC1WF8,0FFC00FF01F01FF9FF07FC7C3FF81FE7FFBPFE,0FFC01FE01F01FF1FC0FF07C7FF81FC7FF1MF0FF,1FF807F801F00FE0F01FC07CIF00F07FC1FBIFC,1FF80FF001FM07F807CFFCJ03F80E1FFE,3FF81FC003FL01FE007C7F8K08J07E,3EF03F8003EL03F8007C3C,3DF07FI07EL0FFI078,7DF0FEI07CK01FCI0F8,7FE1FCI0FCK03F8I0F8,7FE3F8001F8K07FJ0F8,7FC7FI03F8J01FCJ0F8,7FCFEI03FK03F8I01F,FF8FCI07EK07FJ01F,FF9F8I0FCK0FEJ01F,FF1FI01FCJ01FCJ03E,FE3FI03F8J01F8J03E,FE3EI0FFK03FK03E,7C7C001FEK07EK07C,787C003FCK0FCK07C,78F800FF8K0F8K0F8,00F801FEK01F8J01F8,00F807FCK01FK01F,00F81FF8K03FK03F,00JFEL03EK07E,00JFCL03EK0FC,007IFM03EJ01F8,007FFCM03EJ03F8,003FFN03EJ0FF,S03FI03FE,S03FC01FFC,S01LF,T0KFE,T07JF8,T01IFE,U03FE,^FS
      `;
      var zplSignature = `
                  ^FX Set Text Size signature
                  ^CF0,25
                  ^FB300,2,0,L^FT80,1710^FDPickup Signature:^FS
                  ^FX Signature Box
                  ^FO50,1647^GB700,100,3^FS
      `;
      var zplOurCopy = `
                ^XA
                ^${zplMain}
                ^${zplSignature}
                ^XZ
      `;
      var zplCustomerCopy = `
                ^XA
                ^${zplMain}
                ^${zplCustomerCopyText}
                ^XZ
      `;

      let zpl = zplOurCopy.concat(zplCustomerCopy);
      let giftPrintNumber = 0;
      
      if(gift_1_description){
        giftPrintNumber++;
        var zplGiftTag1 = formatGiftTag(1, gift_1_description, gift_1_recipient, gift_1_paper);
        zpl = zpl.concat(zplGiftTag1);
      };
      if(gift_2_description){
        giftPrintNumber++;
        var zplGiftTag2 = formatGiftTag(2, gift_2_description, gift_2_recipient, gift_2_paper);
        zpl = zpl.concat(zplGiftTag2);
      };
      if(gift_3_description){
        giftPrintNumber++;
        var zplGiftTag3 = formatGiftTag(3, gift_3_description, gift_3_recipient, gift_3_paper);
        zpl = zpl.concat(zplGiftTag3);
      };
      if(gift_4_description){
        giftPrintNumber++;
        var zplGiftTag4 = formatGiftTag(4, gift_4_description, gift_4_recipient, gift_4_paper);
        zpl = zpl.concat(zplGiftTag4);
      };
      if(gift_5_description){
        giftPrintNumber++;
        var zplGiftTag5 = formatGiftTag(5, gift_5_description, gift_5_recipient, gift_5_paper);
        zpl = zpl.concat(zplGiftTag5);
      };
      if(gift_6_description){
        giftPrintNumber++;
        var zplGiftTag6 = formatGiftTag(6, gift_6_description, gift_6_recipient, gift_6_paper);
        zpl = zpl.concat(zplGiftTag6);
      };
      if(gift_7_description){
        giftPrintNumber++;
        var zplGiftTag7 = formatGiftTag(7, gift_7_description, gift_7_recipient, gift_7_paper);
        zpl = zpl.concat(zplGiftTag7);
      };
      if(gift_8_description){
        giftPrintNumber++;
        var zplGiftTag8 = formatGiftTag(8, gift_8_description, gift_8_recipient, gift_8_paper);
        zpl = zpl.concat(zplGiftTag8);
      };
      if(gift_9_description){
        giftPrintNumber++;
        var zplGiftTag9 = formatGiftTag(9, gift_9_description, gift_9_recipient, gift_9_paper);
        zpl = zpl.concat(zplGiftTag9);
      };
      if(gift_10_description){
        giftPrintNumber++;
        var zplGiftTag10 = formatGiftTag(10, gift_10_description, gift_10_recipient, gift_10_paper);
        zpl = zpl.concat(zplGiftTag10);
      };
      if(gift_11_description){
        giftPrintNumber++;
        var zplGiftTag11 = formatGiftTag(11, gift_11_description, gift_11_recipient, gift_11_paper);
        zpl = zpl.concat(zplGiftTag11);
      };
      function formatGiftTag(tagNumber, description, recipient, paper){
        let thisGiftZpl = `
          ^XA


          ^PW812
          ^LL609


          ^FR^FO0,0^GB812,0,136^FS
          ^FX Gift Tag
          ^CF0,90
          ^FO85,50^FR^FD${first} ${last}^FS
          ^CF0,60
          ^FB620,2,0,L^FT85,270^FDGift: ${description}^FS
          ^FB620,2,0,L^FT85,390^FDFor: ${recipient}^FS

          ^FX Cubby Paper Gift Size and text
          ^CF0,120
          ^FO350,390^FD${paper}^FS
          ^CF0,90
          ^FO100,390^FD${cubby}^FS
          ^CF0,120
          ^FO510,390^FD${giftPrintNumber}/${giftIndex}^FS

          ^FX Cubbie Paper Gift of footer Size and text
          ^CF0,40
          ^FO340,510^FDPaper^FS
          ^FO100,510^FDCubbie^FS
          ^FO600,510^FDGift^FS

          ^FX Grid Shapes
          ^FX Outer Box
          ^FO25,350^GB750,200,3^FS
          ^FX Vertical Line 1
          ^FO285,350^GB3,200,3^FS
          ^FX Vertical Line 2
          ^FO485,350^GB3,200,3^FS
          ^FX Cubby Black Bar
          ^FR^FO28,497^GB744,0,50^FS

          ^XZ
        `;
        return thisGiftZpl;
      }

      sendRequest(ip_addr, zpl);
      resetForm();
    
    }  


