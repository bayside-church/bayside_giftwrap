let giftIndex = 0;
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

          // Existing print function logic
          // ...

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
                  ^FO50,50^GB700,1700,3^FS
                  ^FX Vertical Line 1 Top Middle
                  ^FO400,50^GB3,300,3^FS
                  ^FX Vertical Line 2 
                  ^FO400,415^GB3,65,3^FS
                  ^FX Vertical Line 3 who for left
                  ^FO400,480^GB3,1170,3^FS
                  ^FX Vertical Line 4 who for right
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
                  ^FX Horizontal Line 16
                  ^FO50,1650^GB700,3,3^FS


                  ^CF0,40
                  ^FX Text content and position for cubby number header
                  ^FO80,60^FDCubby #^FS
                  ^FX Text content and position for order taker header
                  ^FO420,60^FDOrder Taker Initials^FS

                  ^FX Set Text Size for larger box text
                  ^CF0,180
                  ^FX Text content and position for cubby number
                  ^FO80,150^FD${cubby}^FS
                  ^FX Text content and position for order taker
                  ^FO440,150^FD${initials}^FS

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

                  ^FX Set Text Size signature
                  ^CF0,25
                  ^FB300,2,0,L^FT80,1710^FDPickup Signature:^FS

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
      `;
      var zplOurCopy = `
                ^XA
                ^${zplMain}
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
          ^FO150,390^FD${cubby}^FS
          ^FO510,390^FD${giftPrintNumber}/${giftIndex}^FS

          ^FX Cubbie Paper Gift of footer Size and text
          ^CF0,40
          ^FO340,510^FDPaper^FS
          ^FO140,510^FDCubbie^FS
          ^FO540,510^FDGift^FS

          ^FX Grid Shapes
          ^FX Outer Box
          ^FO85,350^GB600,200,3^FS
          ^FX Vertical Line 1
          ^FO285,350^GB3,200,3^FS
          ^FX Vertical Line 2
          ^FO485,350^GB3,200,3^FS
          ^FX Cubby Black Bar
          ^FR^FO88,497^GB594,0,50^FS

          ^XZ
        `;
        return thisGiftZpl;
      }

      var url = "http://"+ip_addr+"/pstprnt";
      var method = "POST";
      var async = true;
      var request = new XMLHttpRequest();

      request.onload = function () {
        var status = request.status; 
        var data = request.responseText; 
        output.innerHTML = "Status: " + status + "<br>" + data;
      }


      request.open(method, url, async);
      request.send(zpl);



    }  