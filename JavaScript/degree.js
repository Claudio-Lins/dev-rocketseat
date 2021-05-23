function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F");
  
    if (!celsiusExists && !fahrenheitExists) {
      throw new Error("Grau não identificado");
    }

    let updateDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    return formula(updateDegree) + degreeSign

  }
  
  try {
    console.log(transformDegree("50F"));
    // transformDegree("50v");
  } catch (error) {
    console.log(error.message);
  }
  