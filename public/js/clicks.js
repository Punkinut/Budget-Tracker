// Click event that opens up the transactions
$('.tranny').on('click', () => {
    // Open transactions
    $('.desk-table').toggleClass('block');
    // console.log(`${$('.tranny').text()}`)
})

$('.add').on('click', () => {
    // Open Menu to add transaction
    $('.add-container').css('display', 'block');
})

$('#add-btn').on('click', () => {
    // Open Menu to add transaction
    $('.add-container').css('display', 'none');
})

$('#sub-btn').on('click', () => {
    // Open Menu to add transaction
    $('.add-container').css('display', 'none');
})
