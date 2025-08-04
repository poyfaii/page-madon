// ข้อมูลสินค้าเริ่มต้น (สามารถแก้ไขหรือเพิ่มได้ในหน้า edit.html)
let products = [
  {
    "category": "กลุ่มกล้วยแปรรูป",
    "name": "กล้วยม้วน",
    "price_kg": "160 บาท",
    "price_box": "5 กิโล = 500 บาท (ส่งฟรี)",
    "image": "https://via.placeholder.com/400x300?text=กล้วยม้วน"
  },
  {
    "category": "กลุ่มกล้วยแปรรูป",
    "name": "กล้วยอบเนย",
    "price_kg": "180 บาท",
    "price_box": "5 กิโล = 550 บาท",
    "image": "https://via.placeholder.com/400x300?text=กล้วยอบเนย"
  },
  {
    "category": "กลุ่มมันฝรั่ง / เผือก / ฟักทอง",
    "name": "มันฝรั่งทอด",
    "price_kg": "120 บาท",
    "price_box": "5 กิโล = 400 บาท",
    "image": "https://via.placeholder.com/400x300?text=มันฝรั่งทอด"
  },
  {
    "category": "กลุ่มขนมอบ & ขนมไทยแปรรูป",
    "name": "คุกกี้สิงคโปร์",
    "price_kg": "120 บาท",
    "price_box": "5 กิโล = 400 บาท",
    "image": "https://via.placeholder.com/400x300?text=คุกกี้สิงคโปร์"
  },
  {
    "category": "กลุ่มขนมอบ & ขนมไทยแปรรูป",
    "name": "ขนมผิง",
    "price_kg": "100 บาท",
    "price_box": "5 กิโล = 350 บาท",
    "image": "https://via.placeholder.com/400x300?text=ขนมผิง"
  }
];

// ฟังก์ชันสำหรับดึงข้อมูลสินค้าจาก localStorage หรือใช้ข้อมูลเริ่มต้น
function getProducts() {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    return JSON.parse(storedProducts);
  }
  return products; // ถ้าไม่มีข้อมูลใน localStorage ให้ใช้ข้อมูลเริ่มต้น
}

// ฟังก์ชันสำหรับบันทึกข้อมูลสินค้าลง localStorage
function saveProducts(productsToSave) {
  localStorage.setItem('products', JSON.stringify(productsToSave));
}

// ฟังก์ชันสำหรับจัดกลุ่มสินค้าตามหมวดหมู่
function groupProductsByCategory(products) {
  const grouped = {};
  products.forEach(product => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
  });
  return grouped;
}
