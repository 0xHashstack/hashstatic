const numberFormatter = (input: any) => {
    if (input === null) return "";
    var number = parseFloat(input);
  
    if (isNaN(number)) {
      return "Invalid input";
    }
  
    var suffixes = [
      "",
      "K",
      "M",
      "B",
      "T",
      "Qa",
      "Qi",
      "Sx",
      "Sp",
      "Oc",
      "No",
      "Dc",
      "Un",
    ];
    var magnitude = 0;
    while (Math.abs(number) >= 1000) {
      magnitude++;
      number /= 1000.0;
    }
  
    // Format the number with the appropriate magnitude and suffix
    // console.log(
    //   "decimals ",
    //   5 - (Math.log10(96.95) + 1),
    //   Math.floor(Math.max(5 - Math.max(1, Math.log10(96.95) + 1), 0))
    // );
    var formattedNumber =
      magnitude < 1
        ? number?.toFixed(
            Math.max(5 - Math.floor(Math.max(1, Math.log10(number) + 1)), 0)
          )
        : // .replace(/\.?0+$/, "") // Remove trailing zeros and decimal point if unnecessary
          number?.toFixed(
            Math.max(2 - Math.floor(Math.max(1, Math.log10(number) + 1)), 0)
          );
    // .replace(/\.?0+$/, ""); // Remove trailing zeros and decimal point if unnecessary
    return formattedNumber + suffixes[magnitude];
  };
  // console.log("hey");
  // console.log(formatNumber(2028222220.2222));
  // console.log(formatNumber(2022));
  export default numberFormatter;
  