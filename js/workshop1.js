
    $(function() {
        $('.material-card').materialCard({
            icon_close: 'fa-chevron-left',
            icon_open: 'fa-thumbs-o-up',
            icon_spin: 'fa-spin-fast',
            card_activator: 'click'
        });

        window.setTimeout(function() {
            $('.material-card:eq(1)').materialCard('open');
        }, 2000);

        $('.material-card').on('shown.material-card show.material-card hide.material-card hidden.material-card', function (event) {
            console.log(event.type, event.namespace, $(this));
        });

    });

