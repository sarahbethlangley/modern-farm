export const catalog = (foodArray) => {
    for (let food of foodArray) {
        return <section class="plant">`${food.name}`</section>
    }
}