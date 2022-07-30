$(function() {
    var mt = $('.mainTable'),
        dv = $('<div/>'),
        rows = $('tbody tr',mt).clone(),
        ln = rows.length,
        ntc = 1;
    for( var i = 0; i < ln; i = i + 2 ) {
        var nt = mt.clone().toggleClass('mainTable newTable');
        $('tbody', nt).html( rows.eq(i).clone() );
        if( i + 2 <= ln ) {
            $('tbody',nt).append( rows.eq(i+1).clone() );
        }
        dv.append( '<h1>New Table ' + ntc + '</h1>' );
        dv.append( nt );
        ntc++;
    }
    mt.after( dv.html() );
});