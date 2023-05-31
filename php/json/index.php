<?php
class xml_to_json
{
    private $result;
    public function __construct()
    {
        $this->sendRequest();
        if(!$this->result){
            echo("Woops something went wrong while fetching data \n");
        }else{
            $this->convertToJson($this->result);
        }
    }

    private function sendRequest()
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        $this->result = $result;
    }

    private function convertToJson($result)
    {
        $xml = simplexml_load_string($result);
        $json = json_encode($xml);
        $array = json_decode($json, TRUE);
        $string = json_encode($array);
        $fp = fopen('data.json', 'w');
        fwrite($fp, $string);
        fclose($fp);
    }
}

new xml_to_json();
