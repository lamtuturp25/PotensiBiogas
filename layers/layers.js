var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IndeksIndentifikasiKesesuaianFasilitasBiogas_1 = new ol.format.GeoJSON();
var features_IndeksIndentifikasiKesesuaianFasilitasBiogas_1 = format_IndeksIndentifikasiKesesuaianFasilitasBiogas_1.readFeatures(json_IndeksIndentifikasiKesesuaianFasilitasBiogas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksIndentifikasiKesesuaianFasilitasBiogas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksIndentifikasiKesesuaianFasilitasBiogas_1.addFeatures(features_IndeksIndentifikasiKesesuaianFasilitasBiogas_1);
var lyr_IndeksIndentifikasiKesesuaianFasilitasBiogas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksIndentifikasiKesesuaianFasilitasBiogas_1, 
                style: style_IndeksIndentifikasiKesesuaianFasilitasBiogas_1,
                popuplayertitle: 'Indeks Indentifikasi Kesesuaian Fasilitas Biogas',
                interactive: true,
    title: 'Indeks Indentifikasi Kesesuaian Fasilitas Biogas<br />\
    <img src="styles/legend/IndeksIndentifikasiKesesuaianFasilitasBiogas_1_0.png" /> 0,25- 0,35<br />\
    <img src="styles/legend/IndeksIndentifikasiKesesuaianFasilitasBiogas_1_1.png" /> 0,35- 0,45<br />\
    <img src="styles/legend/IndeksIndentifikasiKesesuaianFasilitasBiogas_1_2.png" /> 0,45 - 0,55<br />\
    <img src="styles/legend/IndeksIndentifikasiKesesuaianFasilitasBiogas_1_3.png" /> 0,55 - 0,65<br />\
    <img src="styles/legend/IndeksIndentifikasiKesesuaianFasilitasBiogas_1_4.png" /> 0,65 - 0,75<br />' });
var format_PotensiBiogasKWh_2 = new ol.format.GeoJSON();
var features_PotensiBiogasKWh_2 = format_PotensiBiogasKWh_2.readFeatures(json_PotensiBiogasKWh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiBiogasKWh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiBiogasKWh_2.addFeatures(features_PotensiBiogasKWh_2);
var lyr_PotensiBiogasKWh_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiBiogasKWh_2, 
                style: style_PotensiBiogasKWh_2,
                popuplayertitle: 'Potensi Biogas (KWh)',
                interactive: true,
    title: 'Potensi Biogas (KWh)<br />\
    <img src="styles/legend/PotensiBiogasKWh_2_0.png" /> 28.157.426 - 454.310.805<br />\
    <img src="styles/legend/PotensiBiogasKWh_2_1.png" /> 454.310.805 - 166.264.0155<br />\
    <img src="styles/legend/PotensiBiogasKWh_2_2.png" /> 1.662.640.155 - 2.973.169.611<br />\
    <img src="styles/legend/PotensiBiogasKWh_2_3.png" /> 2.973.169.611 - 4.719.169.257<br />\
    <img src="styles/legend/PotensiBiogasKWh_2_4.png" /> 4.719.169.257 - 19.429.401.882<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_IndeksIndentifikasiKesesuaianFasilitasBiogas_1.setVisible(true);lyr_PotensiBiogasKWh_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IndeksIndentifikasiKesesuaianFasilitasBiogas_1,lyr_PotensiBiogasKWh_2];
lyr_IndeksIndentifikasiKesesuaianFasilitasBiogas_1.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'Potensi Bi': 'Potensi Bi', 'Potensi _1': 'Potensi _1', 'Dimensi Ak': 'Dimensi Ak', 'Kedekatan': 'Kedekatan', 'Aspek Sosi': 'Aspek Sosi', 'Indeks Ide': 'Indeks Ide', 'Indeks': 'Indeks', });
lyr_PotensiBiogasKWh_2.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'Potensi Bi': 'Potensi Bi', 'Potensi _1': 'Potensi _1', 'Dimensi Ak': 'Dimensi Ak', 'Kedekatan': 'Kedekatan', 'Aspek Sosi': 'Aspek Sosi', 'Indeks Ide': 'Indeks Ide', });
lyr_IndeksIndentifikasiKesesuaianFasilitasBiogas_1.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'Potensi Bi': 'TextEdit', 'Potensi _1': 'TextEdit', 'Dimensi Ak': 'TextEdit', 'Kedekatan': 'TextEdit', 'Aspek Sosi': 'TextEdit', 'Indeks Ide': 'TextEdit', 'Indeks': 'TextEdit', });
lyr_PotensiBiogasKWh_2.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'Potensi Bi': 'TextEdit', 'Potensi _1': 'TextEdit', 'Dimensi Ak': 'TextEdit', 'Kedekatan': 'TextEdit', 'Aspek Sosi': 'TextEdit', 'Indeks Ide': 'TextEdit', });
lyr_IndeksIndentifikasiKesesuaianFasilitasBiogas_1.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'Potensi Bi': 'no label', 'Potensi _1': 'no label', 'Dimensi Ak': 'no label', 'Kedekatan': 'no label', 'Aspek Sosi': 'no label', 'Indeks Ide': 'no label', 'Indeks': 'no label', });
lyr_PotensiBiogasKWh_2.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'Potensi Bi': 'no label', 'Potensi _1': 'no label', 'Dimensi Ak': 'no label', 'Kedekatan': 'no label', 'Aspek Sosi': 'no label', 'Indeks Ide': 'no label', });
lyr_PotensiBiogasKWh_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});