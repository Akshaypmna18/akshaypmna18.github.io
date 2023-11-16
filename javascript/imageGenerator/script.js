const input = $("#input"),
  imageLen = $("#img-len"),
  imageContainer = $("main");

const key = "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";

input.on("keydown", function (e) {
  if (e.which == 13) {
    // console.log(input.val());
    // console.log(imageLen.val());
    const images = Array.from(
      { length: imageLen.val() },
      () => `<div class="w-48 h-48 border-2 border-gray-500 flex justify-center items-center rounded-lg bg-gray-100"><svg
    version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"
    class="w-24 ml-10">
    <circle fill="#444" stroke="none" cx="6" cy="50" r="6">
        <animateTransform attributeName="transform" dur="1s" type="translate"
            values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
    </circle>
    <circle fill="#444" stroke="none" cx="30" cy="50" r="6">
        <animateTransform attributeName="transform" dur="1s" type="translate"
            values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
    </circle>
    <circle fill="#444" stroke="none" cx="54" cy="50" r="6">
        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite" begin="0.3" />
    </circle>
</svg>
</div>`
    );
    imageContainer.html(images);
    generateAiImages(input.val(), imageLen.val());
  }
  return;
});

// const generateAiImages = async (input, length) => {
//     try{
//         const response=await fetch("https://api.openai.com/v1/images/generations",{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json","Authorization": `Bearer ${key}`
//             },body:JSON.stringify({
//                 prompt:input,n:length,size:"512x512",response_format:"b64_json"
//             })
//         })
//     }
//     const { data }=await response.json();
//     console.log(data)
//     catch(error){console.log(error)}
//     };

const generateAiImages = async (input, length) => {
  try {
    const response = await $.ajax({
      url: "https://api.openai.com/v1/images/generations",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      data: JSON.stringify({
        prompt: input,
        n: parseInt(length),
        size: "512x512",
        response_format: "b64_json",
      }),
      dataType: "json",
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log("error" + error);
      },
    });
  } catch (error) {
    console.log("error " + error);
  }
};
