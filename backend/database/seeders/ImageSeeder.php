<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_images')->insert([
            ['product_id' => 11, 'image_path' => 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'image_alt' => 'Front view of a Basic Tee', 'primary' => true],
            ['product_id' => 11, 'image_path' => 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'image_alt' => 'Back view of a Basic Tee', 'primary' => false],
            ['product_id' => 11, 'image_path' => 'https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'image_alt' => 'Back view of a Basic Tee', 'primary' => false],
            ['product_id' => 12, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MTB022_TRELLIS.jpg', 'image_alt' => 'Front view of a Shirt', 'primary' => true],
            ['product_id' => 12, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MTB022_TRELLIS_2.jpg', 'image_alt' => 'Back view of a Shirt', 'primary' => false],
            ['product_id' => 12, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MTB022_TRELLIS_4.jpg', 'image_alt' => 'Back view of a Shirt', 'primary' => false],
            ['product_id' => 13, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MUB073_NVYGRNBLK_1.jpg?v=15', 'image_alt' => 'Front view of a Checkered Shirt', 'primary' => true],
            ['product_id' => 13, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MUB073_NVYGRNBLK_2.jpg?v=15', 'image_alt' => 'Back view of a Checkered Shirt', 'primary' => false],
            ['product_id' => 13, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MUB073_NVYGRNBLK_3.jpg?v=15', 'image_alt' => 'Back view of a Checkered Shirt', 'primary' => false],
            ['product_id' => 14, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MTE302_RIVERA.jpg', 'image_alt' => 'Front view of a Polo Shirt', 'primary' => true],
            ['product_id' => 14, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MTE302_RIVERA_1.jpg', 'image_alt' => 'Back view of a Polo Shirt', 'primary' => false],
            ['product_id' => 14, 'image_path' => 'https://www.crewclothing.co.uk/images/products/large/MTE302_RIVERA_2.jpg', 'image_alt' => 'Back view of a Polo Shirt', 'primary' => false],

            ['product_id' => 21, 'image_path' => 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f4dbcc5f8f041478d6bf895a572fc94_9366/Gazelle_Shoes_Brown_IG6199_01_standard.jpg', 'image_alt' => 'Running Shoes side view', 'primary' => true],
            ['product_id' => 21, 'image_path' => 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a64ca26266e4d7f8177e5f8c088fa93_9366/Gazelle_Shoes_Brown_IG6199_02_standard_hover.jpg', 'image_alt' => 'Running Shoes Top view', 'primary' => false],
            ['product_id' => 21, 'image_path' => 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f82a12276f9c4c34a1641720e091e3d3_9366/Gazelle_Shoes_Brown_IG6199_03_standard.jpg', 'image_alt' => 'Running Shoes Bottom view', 'primary' => false],
            ['product_id' => 22, 'image_path' => 'https://www.barkershoes.com/cdn/shop/products/Winsford_394517_BlackPolish_015edd64-5036-41cd-a28d-b1d18a5d9d07_1080x.png?v=1710918521', 'image_alt' => 'Dress Shoes side view', 'primary' => true],
            ['product_id' => 22, 'image_path' => 'https://www.barkershoes.com/cdn/shop/products/Winsford_394517_BlackPolish_SIDE_580805e9-fdc4-4ab9-82da-c719740f14af_360x.png?v=1710918521', 'image_alt' => 'Dress Shoes Top view', 'primary' => false],
            ['product_id' => 22, 'image_path' => 'https://www.barkershoes.com/cdn/shop/products/Winsford_394517_BlackPolish_TOP_fb0a2cf8-02d2-4c8f-b99d-a8f9e96fa2bb_360x.png?v=1575357572', 'image_alt' => 'Dress Shoes Bottom view', 'primary' => false],
            ['product_id' => 23, 'image_path' => 'https://d2ob0iztsaxy5v.cloudfront.net/product/330012/3300127260m1_zm.jpg', 'image_alt' => 'Sliders side view', 'primary' => true],
            ['product_id' => 23, 'image_path' => 'https://d2ob0iztsaxy5v.cloudfront.net/product/330012/3300127260_zm.jpg', 'image_alt' => 'Sliders Top view', 'primary' => false],
            ['product_id' => 23, 'image_path' => 'https://d2ob0iztsaxy5v.cloudfront.net/product/330012/3300127260m7_zm.jpg', 'image_alt' => 'Sliders Bottom view', 'primary' => false],
            ['product_id' => 24, 'image_path' => 'https://www.toms.com/dw/image/v2/BDWV_PRD/on/demandware.static/-/Sites-toms-master-catalog/default/dw75fcf8cd/images/product-images/10019870-F.jpg?sw=900&sh=630&sm=fit&q=65', 'image_alt' => 'Toms side view', 'primary' => true],
            ['product_id' => 24, 'image_path' => 'https://www.toms.com/dw/image/v2/BDWV_PRD/on/demandware.static/-/Sites-toms-master-catalog/default/dw448fcb1c/images/product-images/10019870-B.jpg?sw=900&sh=630&sm=fit&q=65', 'image_alt' => 'Toms Top view', 'primary' => false],
            ['product_id' => 24, 'image_path' => 'https://www.toms.com/dw/image/v2/BDWV_PRD/on/demandware.static/-/Sites-toms-master-catalog/default/dwadad411c/images/product-images/10019870-T.jpg?sw=900&sh=630&sm=fit&q=65', 'image_alt' => 'Toms Bottom view', 'primary' => false],


            ['product_id' => 31, 'image_path' => 'https://images.lululemon.com/is/image/lululemon/LM5AYES_035955_1?size=1200,1200', 'image_alt' => 'Front view of Jeans', 'primary' => true],
            ['product_id' => 31, 'image_path' => 'https://images.lululemon.com/is/image/lululemon/LM5AYES_035955_3?size=1200,1200', 'image_alt' => 'Back view of Jeans', 'primary' => false],
            ['product_id' => 31, 'image_path' => 'https://images.lululemon.com/is/image/lululemon/LM5AYES_035955_2?size=1200,1200', 'image_alt' => 'Full view of Jeans', 'primary' => false],
            ['product_id' => 32, 'image_path' => 'https://johnlewis.scene7.com/is/image/JohnLewis/006198638?$rsp-pdp-port-640$', 'image_alt' => 'Front view of Trousers', 'primary' => true],
            ['product_id' => 32, 'image_path' => 'https://johnlewis.scene7.com/is/image/JohnLewis/006198638alt1?$rsp-pdp-port-640$', 'image_alt' => 'Back view of Trousers', 'primary' => false],
            ['product_id' => 32, 'image_path' => 'https://johnlewis.scene7.com/is/image/JohnLewis/006198638alt2?$rsp-pdp-port-640$', 'image_alt' => 'Full view of Trousers', 'primary' => false],
            ['product_id' => 33, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/n66277s.jpg?im=Resize,width=364', 'image_alt' => 'Front view of Linen Trousers', 'primary' => true],
            ['product_id' => 33, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/n66277s4.jpg?im=Resize,width=364', 'image_alt' => 'Back view of Linen Trousers', 'primary' => false],
            ['product_id' => 33, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/n66277s2.jpg?im=Resize,width=364', 'image_alt' => 'Full view of Linen Trousers', 'primary' => false],
            ['product_id' => 34, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/826849s.jpg?im=Resize,width=364', 'image_alt' => 'Front view of Shorts', 'primary' => true],
            ['product_id' => 34, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/826849s3.jpg?im=Resize,width=364', 'image_alt' => 'Back view of Shorts', 'primary' => false],
            ['product_id' => 34, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/826849s2.jpg?im=Resize,width=364', 'image_alt' => 'Full view of Shorts', 'primary' => false],

            ['product_id' => 41, 'image_path' => 'https://www.neweracap.co.uk/globalassets/products/a10141_282/12380590/12380590-left.jpg', 'image_alt' => 'Stylish Hat Front View', 'primary' => true],
            ['product_id' => 41, 'image_path' => 'https://www.neweracap.co.uk/globalassets/products/a10141_282/12380590/12380590-right.jpg', 'image_alt' => 'Stylish Hat Alt Front View', 'primary' => false],
            ['product_id' => 41, 'image_path' => 'https://www.neweracap.co.uk/globalassets/products/a10141_282/12380590/12380590-back.jpg', 'image_alt' => 'Stylish Hat Back View', 'primary' => false],
            ['product_id' => 42, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/103438s.jpg?im=Resize,width=364', 'image_alt' => 'Sunglasses Front View', 'primary' => true],
            ['product_id' => 42, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/103438s4.jpg?im=Resize,width=364', 'image_alt' => 'Sunglasses Alt Front View', 'primary' => false],
            ['product_id' => 42, 'image_path' => 'https://xcdn.next.co.uk/common/Items/Default/Default/ItemImages/AltItemThumb/103438s2.jpg', 'image_alt' => 'Sunglasses Back View', 'primary' => false],
            ['product_id' => 43, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/438074s.jpg?im=Resize,width=364', 'image_alt' => 'Belt Front View', 'primary' => true],
            ['product_id' => 43, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/438074s2.jpg?im=Resize,width=364', 'image_alt' => 'Belt Alt Front View', 'primary' => false],
            ['product_id' => 43, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/438074s3.jpg?im=Resize,width=364', 'image_alt' => 'Belt Back View', 'primary' => false],
            ['product_id' => 44, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/d55123s.jpg?im=Resize,width=364', 'image_alt' => 'Wallet Front View', 'primary' => true],
            ['product_id' => 44, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/d55123s2.jpg?im=Resize,width=364', 'image_alt' => 'Wallet Alt Front View', 'primary' => false],
            ['product_id' => 44, 'image_path' => 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/d55123s3.jpg?im=Resize,width=364', 'image_alt' => 'Wallet Back View', 'primary' => false],

        ]);
    }
}
