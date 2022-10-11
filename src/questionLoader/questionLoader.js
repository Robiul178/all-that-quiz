export const questionLoader = async () => {
    const questionData = await fetch('question.json');
    const question = await questionData.json();
    console.log(question)
}