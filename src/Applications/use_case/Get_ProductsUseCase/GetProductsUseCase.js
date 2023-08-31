// ADD MODEL DARI DOMAIN YANG SUDAH DI BUAT

// const AddedComment = require('../../../Domains/comments/entities/AddedComment');
// const NewComment = require('../../../Domains/comments/entities/NewComment');



class GetProductsUseCase {
  // constructor akan menerima parameter yang dikirimkan oleh dependency injection 
  // Parameter adalah kumpulan fungsi yang dibutuhkan oleh use case
  // Contoh : commentRepository, threadRepository di butuhkan untuk menambahkan commentUseCase
  constructor({getProduct}) {
    this._getProduct = getProduct;
    // this._threadRepository= threadRepository;
  }

  async execute() {
    console.log('masuk usecase')
    const products = await this._getProduct.getProducts();
    // const newComment = new NewComment(useCasePayload);
    // await this._threadRepository.verifyAvailableThread(newComment.threadId);
    console.log(products.data.data)
    // const addedComment = await this._commentRepository.addComment(newComment);
    // // console.log('newComment', newComment.threadId)
    // return new AddedComment(addedComment);
    return products.data;
  }
}

module.exports = GetProductsUseCase;