import React from 'react'
import './bodycontainer.css';

const bodycontainer = () => {
  return (
    <div class="body-card-container">
    <div class="banner">
        <div class="body-card">
            <div class="details">
                <p>ZONA TARIF</p>
            </div>
        <div class="zona-daerah">
            <select>
                <option value=""></option>
                <option value="">JABODETABEK / MONTHLY</option>
                <option value="">JATIM & BALNUS / MONTHLY</option>
                <option value="">JABAR & JATENG / MONTHLY</option>
                <option value="">SUMATRA / MONTHLY</option>
                <option value="">KALIMANTAN / MONTHLY</option>
                <option value="">SULAWESI / MONTHLY</option>
                <option value="">PALMAL / MONTHLY</option>
            </select>
            
            <select>
                <option value=""></option>
                <option value="">BEST EFFORT / MONTHLY</option>
                <option value="">CRITICAL / MONTHLY</option>
                <option value="">INTERACTIVE / MONTHLY</option>
                <option value="">PAKET CUSTOM / MONTHLY</option>
            </select>
            <select class="custom">
                <option value="">Kbps</option>
                <option value="">Mbps</option>
            </select>
            <select class="custom">
                <option value="">Kbps</option>
                <option value="">Mbps</option>
            </select>


            <select>
                <option value=""></option>
                <option value="">32 Kbps / MONTHLY</option>
                <option value="">62 Kbps / MONTHLY</option>
                <option value="">128 Kbps / MONTHLY</option>
                <option value="">256 Kbps / MONTHLY</option>
                <option value="">512 Kbps / MONTHLY</option>
                <option value="">1 Mbps / MONTHLY</option>
                <option value="">2 Mbps / MONTHLY</option>
                <option value="">3 Mbps / MONTHLY</option>
                <option value="">4 Mbps / MONTHLY</option>
                <option value="">5 Mbps / MONTHLY</option>
                <option value="">6 Mbps / MONTHLY</option>
                <option value="">7 Mbps / MONTHLY</option>
                <option value="">8 Mbps / MONTHLY</option>
                <option value="">9 Mbps / MONTHLY</option>
                <option value="">10 Mbps / MONTHLY</option>
                <option value="">20 Mbps / MONTHLY</option>
                <option value="">30 Mbps / MONTHLY</option>
                <option value="">40 Mbps / MONTHLY</option>
                <option value="">50 Mbps / MONTHLY</option>
                <option value="">60 Mbps / MONTHLY</option>
                <option value="">70 Mbps / MONTHLY</option>
                <option value="">80 Mbps / MONTHLY</option>
                <option value="">90 Mbps / MONTHLY</option>
                <option value="">100 Mbps / MONTHLY</option>
                <option value="">200 Mbps / MONTHLY</option>
                <option value="">300 Mbps / MONTHLY</option>
                <option value="">400 Mbps / MONTHLY</option>
                <option value="">500 Mbps / MONTHLY</option>
                <option value="">600 Mbps / MONTHLY</option>
                <option value="">700 Mbps / MONTHLY</option>
                <option value="">800 Mbps / MONTHLY</option>
                <option value="">900 Mbps / MONTHLY</option>
                <option value="">1000 Mbps / MONTHLY</option>
                <option value="">INTERPOLASI / MONTHLY</option>
            </select>
            <span class="custom-arrow"></span>
        </div>

        <div class="hasil-add">
            <div class="add-items">
                <button class="button-min">-</button>
                <span>1</span>
                <button class="button-plus">+</button>
            </div>
            <div class="total-rupiah">
                <p>Rp. 0</p>
            </div>
            <div class="tambah-item">
                <button class="add-item">Add Item</button>
            </div>
        </div>
        </div>
    </div>


    <div class="banner">
        <div class="body-card">
            <div class="details">
                <p>AKTIVASI & INTEGRASI</p>
            </div>
        <div class="aktivasi">
            <select>
                <option value=""></option>
                <option value="">Biaya Aktivasi Integrasi / ONE TIME CHARGE</option>
            </select>
            <span class="custom-arrow"></span>
        </div>

        <div class="hasil-add">
            <div class="add-items">
                <button class="button-min">-</button>
                <span>1</span>
                <button class="button-plus">+</button>
            </div>
            <div class="total-rupiah">
                <p>Rp. 0</p>
            </div>
            <div class="tambah-item">
                <button class="add-item">Add Item</button>
            </div>
        </div>
        </div>
    </div>

    <div class="banner">
        <div class="body-card">
            <div class="details">
                <p>FITUR TAMBAHAN</p>
            </div>
        <div class="fitur">
            <select>
                <option value=""></option>
                <option value="">Jumlah Prefix / MONTHLY</option>
                <option value="">Dynamic Routing / MONTHLY</option>
                <option value="">Access List (ACL) / MONTHLY</option>
                <option value="">Network Time Protocol / MONTHLY</option>
                <option value="">DHCP / MONTHLY</option>
                <option value="">Network Access Transtaltion (NAT) / MONTHLY</option>
                <option value="">VLAN Number Preservation / MONTHLY</option>
                <option value="">Fitur Bandwidth Performance / MONTHLY</option>
            </select>
            <span class="custom-arrow"></span>
        </div>

        <div class="hasil-add">
            <div class="add-items">
                <button class="button-min">-</button>
                <span>1</span>
                <button class="button-plus">+</button>
            </div>
            <div class="total-rupiah">
                <p>Rp. 0</p>
            </div>
            <div class="tambah-item">
                <button class="add-item">Add Item</button>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default bodycontainer
