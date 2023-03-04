export function countDown(n) {
    if (n < 1)
        return "Число не может быть меньше единицы.";

    if (n > 100)
        return "Число не может быть больше ста.";

    if (!Number.isInteger(n))
        return "Ожидается целое число.";

    let answer = String();

    for (let i = n; i >= 1; i--)
        answer += i;

    return answer;
}